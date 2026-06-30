import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User } from "lucide-react";
import { useState } from "react";
import { APP_LOGO, APP_TITLE } from "@/const";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Certifications", href: "/certifications" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 group">
              {APP_LOGO && <img src={APP_LOGO} alt="Logo" className="h-10 w-10" />}
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                A.D.ENTERPRISES
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition relative group">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-700 hover:text-blue-600 transition hidden md:block">
              <Search size={20} />
            </button>

            {/* User Icon */}
            <button className="p-2 text-gray-700 hover:text-blue-600 transition hidden md:block">
              <User size={20} />
            </button>

            {/* Request Quote Button */}
            <Link href="/contact">
              <a className="hidden md:block">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2">
                  Request Quote
                </Button>
              </a>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="flex flex-col py-4 space-y-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <div className="px-4 py-3">
                <Link href="/contact">
                  <a onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                      Request Quote
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
