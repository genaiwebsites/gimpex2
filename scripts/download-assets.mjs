import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const imagesToDownload = [
  {
    url: 'https://images.unsplash.com/photo-1736950825214-1b5e2bdbb5f8?auto=format&fit=crop&w=1600&q=85',
    dest: 'public/images/gallery/highland-tea-estate-sunrise.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1736950825214-1b5e2bdbb5f8?auto=format&fit=crop&w=1600&q=85',
    dest: 'public/images/banners/gallery-banner.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/gallery/tea-machinery-commissioning.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1599008633840-052c7f756385?auto=format&fit=crop&w=1400&q=85',
    dest: 'public/images/gallery/ctc-processing-line.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85',
    dest: 'public/images/gallery/kolkata-port-export-containers.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85',
    dest: 'public/images/banners/contact-banner.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1565071783073-59b7e3fc2ca5?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/gallery/processing-equipment-supplied.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1757439829355-d32a74ef3593?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/gallery/tea-estate-kenya.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1758390286367-7f645bffb090?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/gallery/tea-harvest-dispatch.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1758390285674-f1d55b9d1312?auto=format&fit=crop&w=1600&q=85',
    dest: 'public/images/banners/clients-banner.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1764114441123-586d13fc6ece?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/banners/tea-plantation-panoramic.jpg',
  },
];

async function downloadFile(url, relativePath) {
  const fullPath = path.join(rootDir, relativePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });
    if (!res.ok) {
      console.error(`Failed ${url}: ${res.status} ${res.statusText}`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(fullPath, buffer);
    console.log(`Saved: ${relativePath} (${Math.round(buffer.length / 1024)} KB)`);
    return true;
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
    return false;
  }
}

async function main() {
  console.log('Downloading gallery and banner images...');
  for (const item of imagesToDownload) {
    await downloadFile(item.url, item.dest);
  }

  // Extract all iso2 country codes from countries.ts
  console.log('\nExtracting ISO2 country codes...');
  const countriesFile = fs.readFileSync(path.join(rootDir, 'src/data/countries.ts'), 'utf8');
  const regex = /iso2:\s*["']([a-zA-Z0-9]+)["']/g;
  const isoCodes = new Set();
  let match;
  while ((match = regex.exec(countriesFile)) !== null) {
    isoCodes.add(match[1].toLowerCase());
  }

  // Also add any codes from clients.ts
  const clientsFile = fs.readFileSync(path.join(rootDir, 'src/data/clients.ts'), 'utf8');
  while ((match = regex.exec(clientsFile)) !== null) {
    isoCodes.add(match[1].toLowerCase());
  }

  console.log(`Found ${isoCodes.size} unique country codes.`);

  const flagsDir = path.join(rootDir, 'public/images/flags');
  if (!fs.existsSync(flagsDir)) {
    fs.mkdirSync(flagsDir, { recursive: true });
  }

  console.log('Downloading country flags...');
  let count = 0;
  const codesArray = Array.from(isoCodes);
  // Download in chunks of 10 concurrently
  const chunkSize = 10;
  for (let i = 0; i < codesArray.length; i += chunkSize) {
    const chunk = codesArray.slice(i, i + chunkSize);
    await Promise.all(
      chunk.map(async (code) => {
        const flagPath = path.join(flagsDir, `${code}.png`);
        if (fs.existsSync(flagPath)) {
          return;
        }
        const flagUrl = `https://flagcdn.com/w40/${code}.png`;
        try {
          const res = await fetch(flagUrl);
          if (res.ok) {
            const buf = Buffer.from(await res.arrayBuffer());
            fs.writeFileSync(flagPath, buf);
            count++;
          } else {
            console.warn(`Flag not found for: ${code} (${res.status})`);
          }
        } catch (err) {
          console.warn(`Failed flag for ${code}: ${err.message}`);
        }
      })
    );
  }

  console.log(`Successfully downloaded ${count} flags to public/images/flags/!`);
}

main();
