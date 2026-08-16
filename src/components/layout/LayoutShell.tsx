"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";

export const LayoutShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};
