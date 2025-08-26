"use client";

import { useState } from "react";
// If your Button component exists at src/components/ui/Button.tsx, use:
import { Button } from "@/components/ui/button";

// Or, if the correct path is different, update accordingly.
// If the file does not exist, create src/components/ui/Button.tsx with a valid Button export.
// Update the import path if needed, for example:
import { NAV } from "../data/nav";
// Or create src/data/nav.ts with a valid NAV export if it doesn't exist.
import { Moon, Sun, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

export default function Header({
  dark,
  onToggleTheme,
}: {
  dark: boolean;
  onToggleTheme: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
      <div className="container-x h-16 flex items-center justify-between">
     {/* Logo */}
<a
  href="#inicio"
  className="flex items-center gap-2"
  aria-label="REDMAQ COLOMBIA"
>
  <img 
    src={logo} 
    alt="REDMAQ COLOMBIA Logo" 
    className="h-10 w-auto"
  />
  <span className="hidden md:inline text-xl md:text-2xl font-bold tracking-tight gradient-primary bg-clip-text text-transparent">
    REDMAQ COLOMBIA
  </span>
</a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              {item.label}
            </a>
          ))}

          <Button variant="hero" size="lg" asChild>
            <a href="#contacto">¡Contáctanos!</a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            className="ml-2"
            aria-label="Cambiar tema"
            title="Cambiar tema"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </nav>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            aria-label="Cambiar tema"
            title="Cambiar tema"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-lg">
          <div className="container-x py-4 flex flex-col gap-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <Button variant="hero" size="lg" className="mt-2" asChild>
              <a href="#contacto" onClick={() => setOpen(false)}>¡Contáctanos!</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}