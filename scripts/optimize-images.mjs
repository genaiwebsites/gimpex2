import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public/images');

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'flags') {
        await processDirectory(fullPath);
      }
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      const statBefore = fs.statSync(fullPath);
      const ext = path.extname(entry.name).toLowerCase();

      try {
        const fileBuffer = fs.readFileSync(fullPath);
        const image = sharp(fileBuffer);
        const metadata = await image.metadata();

        // Only process if file is large (> 500 KB) or very wide (> 1920px)
        if (statBefore.size > 500 * 1024 || (metadata.width && metadata.width > 1920)) {
          let pipeline = sharp(fileBuffer);

          // Resize if wider than 1920px
          if (metadata.width && metadata.width > 1920) {
            pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
          }

          let buffer;
          if (ext === '.jpg' || ext === '.jpeg') {
            buffer = await pipeline.jpeg({ quality: 84, mozjpeg: true }).toBuffer();
          } else if (ext === '.png' && !entry.name.includes('logo')) {
            buffer = await pipeline.png({ quality: 85, compressionLevel: 8 }).toBuffer();
          }

          if (buffer && buffer.length < statBefore.size) {
            fs.writeFileSync(fullPath, buffer);
            const savedPct = Math.round((1 - buffer.length / statBefore.size) * 100);
            console.log(
              `Optimized ${path.relative('public', fullPath)}: ${Math.round(statBefore.size / 1024)}KB -> ${Math.round(buffer.length / 1024)}KB (-${savedPct}%)`
            );
          }
        }
      } catch (err) {
        console.warn(`Could not optimize ${entry.name}:`, err.message);
      }
    }
  }
}

async function main() {
  console.log('Starting image optimization across public/images...');
  await processDirectory(publicDir);
  console.log('Finished image optimization!');
}

main();
