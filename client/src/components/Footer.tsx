import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">A.D.ENTERPRISES</h3>
            <p className="text-sm">Leading manufacturer of LV switchboards and LT bus ducts since 2006.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white transition">Power Control Centre</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Motor Control Centre</Link></li>
              <li><Link href="/products" className="hover:text-white transition">APFC Panel</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/infrastructure" className="hover:text-white transition">Infrastructure</Link></li>
              <li><Link href="/certifications" className="hover:text-white transition">Certifications</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">Phone: +91 93770 38505, +91 78780 32927</p>
            <p className="text-sm">Email: akashet@yahoo.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2024 A.D.ENTERPRISES. All rights reserved. | ISO 9001:2015 Certified</p>
        </div>
      </div>
    </footer>
  );
}
