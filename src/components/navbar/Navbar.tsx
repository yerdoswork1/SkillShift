"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BookOpen from "@/assets/icons/book-open.svg";
import BookOpenActive from "@/assets/icons/book-open-active.svg";
import ClipboardList from "@/assets/icons/clipboard-text.svg";
import ClipboardListActive from "@/assets/icons/clipboard-text-active.svg";
import Phone from "@/assets/icons/Icon-phone.svg";
import PhoneActive from "@/assets/icons/icon-phone-active.svg";
import { lato } from "@/assets/fonts/fonts";
import { useTranslation } from "react-i18next";

const navItems = [
  { to: "/home", label: "home", icon: BookOpen, iconActive: BookOpenActive },
  {
    to: "/services",
    label: "services",
    icon: ClipboardList,
    iconActive: ClipboardListActive,
  },
  { to: "/contacts", label: "contacts", icon: Phone, iconActive: PhoneActive },
];

const Navbar = () => {

  const pathname = usePathname();
  const { t } = useTranslation()

  return (
    <nav
      className={` ${lato.className} fixed bottom-0 left-0 z-50 w-full bg-[rgb(246,249,251)] px-10 py-3.5 shadow-[0px_1px_6px_0px_rgba(59,_70,_224,_0.05)] md:hidden`}
    >
      <ul className="flex justify-between">
        {navItems.map(({ to, label, icon, iconActive }) => {
          const isActive = pathname === to;

          return (
            <li key={to}>
              <Link
                href={to}
                aria-current={isActive ? "page" : undefined}
                className="flex flex-col items-center gap-1 text-sm"
              >
                <Image
                  src={isActive ? iconActive : icon}
                  alt={label}
                  className="h-6 w-6"
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    "text-xs font-semibold transition-colors",
                    isActive ? "text-indigo-700" : "text-gray-400",
                  )}
                >
                  {t(`navbar.${label}`)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
