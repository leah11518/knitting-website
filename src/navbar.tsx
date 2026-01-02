// navbar.tsx
import React from "react";
import CustomButton from "./components/button";
import { Spool } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-primary-foreground shadow-md z-50">
      <div className="mx-auto  p-3 flex justify-between items-center">
        <div className="text-lg font-bold flex gap-0.5">
          <Spool className="text-surface" />
          <span className="text-surface">Baller Knits</span>
        </div>
        <div className="space-x-4">
          <CustomButton href="/" className="hover:underline h-8">
            Patterns
          </CustomButton>
          <CustomButton href="/notes" className="hover:underline h-8">
            Notes
          </CustomButton>
          <CustomButton href="/want-to-knit" className="hover:underline h-8">
            Want to Knit
          </CustomButton>
        </div>
      </div>
    </nav>
  );
}
