// navbar.tsx
import React from "react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-primary-foreground shadow-md z-50">
      <div className="max-w-7xl mx-auto  py-3 flex justify-between items-center">
        <span className="text-lg font-bold">My Logo</span>
        <div className="space-x-4">
          <a href="/" className="hover:underline">
            Patterns
          </a>
          <a href="/notes" className="hover:underline">
            Notes
          </a>
          <a href="/want-to-knit" className="hover:underline">
            Want to Knit
          </a>
        </div>
      </div>
    </nav>
  );
}
