import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/skill", label: "SKILL" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/testimonial", label: "TESTIMONIAL" },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="dock-navbar">
      <ul className="dock-list">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} passHref>
              <a className={`dock-link${router.pathname === item.href ? " active" : ""}`}>
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
