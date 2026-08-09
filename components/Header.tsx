import Link from "next/link";

const navLinks = [
  { href: "/tienda", label: "Tienda" },
  { href: "/blog", label: "Blog" },
  { href: "/mejores-portatiles-trabajo-remoto", label: "Portátiles" },
  { href: "/mejores-microfonos-podcast-streaming", label: "Micrófonos" },
  { href: "/mejores-auriculares-teletrabajo", label: "Auriculares" },
  { href: "/mejores-sillas-ergonomicas-teletrabajo", label: "Sillas" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
];

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center shrink-0">
            <svg viewBox="0 0 240 44" height="36" xmlns="http://www.w3.org/2000/svg" aria-label="EmprenderDigital">
              <defs>
                <linearGradient id="ed-g" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a5b4fc"/>
                  <stop offset="100%" stopColor="#4f46e5"/>
                </linearGradient>
              </defs>
              <rect x="0" y="2" width="40" height="40" rx="10" fill="url(#ed-g)"/>
              <path d="M20 7 C20 7 14 13 14 21 L20 25 L26 21 C26 13 20 7 20 7Z" fill="white"/>
              <ellipse cx="20" cy="27" rx="3" ry="3.5" fill="rgba(255,255,255,0.5)"/>
              <circle cx="20" cy="18" r="2.5" fill="rgba(79,70,229,0.6)"/>
              <path d="M14 20 L10 24 L14 23Z" fill="white"/>
              <path d="M26 20 L30 24 L26 23Z" fill="white"/>
              <text x="50" y="30" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" fontWeight="800" fontSize="17" fill="#3730a3">Emprender</text>
              <text x="153" y="30" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" fontWeight="800" fontSize="17" fill="#4f46e5">Digital</text>
              <text x="214" y="30" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" fontWeight="400" fontSize="12" fill="#94a3b8">.es</text>
            </svg>
          </Link>
          <nav className="hidden md:flex items-center gap-1 overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/blog"
            className="md:hidden px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-semibold"
          >
            Artículos
          </Link>
        </div>
      </div>
    </header>
  );
}
