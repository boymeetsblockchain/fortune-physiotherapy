"use client";
import {
  AlignJustify,
  Home,
  Info,
  Briefcase,
  Mail,
  Camera,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

import { useRouter } from "next/navigation";
import Image from "next/image";

const menuItems = [
  { name: "Home", icon: Home, link: "/" },
  { name: "Services", icon: Briefcase, link: "#service" },
  { name: "About", icon: Info, link: "#about" },
  { name: "Contact", icon: Mail, link: "#contact" },
  { name: "Gallery", icon: Camera, link: "#gallery" },
];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50"
    >
      <div className="bg-white h-16 shadow-md px-6 md:px-12 lg:px-16 relative">
        <div className="flex items-center justify-between h-full">
          <Image src="/logo.jpg" height={40} width={40} alt="logo" />
          <ul className="hidden md:flex space-x-6 md:space-x-8 lg:space-x-10 text-gray-600">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-blue-500 hover:text-white  font-semibold px-3 py-1.5 rounded-md transition-colors"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <div>
            <a
              className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
              href="tel:+2348035027408"
            >
              Call: +234 8035027408
            </a>
          </div>

          <div className="flex flex-row-reverse gap-x-5 items-center md:hidden space-x-4">
            <AlignJustify
              size={24}
              className="md:hidden text-black  cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            ref={menuRef}
            className={`absolute right-0 top-0 min-h-svh w-60 bg-white dark:bg-[#0C4860] shadow-lg z-50 transition-transform transform duration-300 login-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <Image
                src="/logo.jpg"
                height={40}
                width={40}
                alt="logo"
                className="mx-auto my-2"
              />

              {/* Mobile Menu Items */}
              <ul className="flex-1 flex flex-col space-y-4 text-gray-600 dark:text-gray-300 px-4">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 cursor-pointer border-b-2 hover:bg-blue-500 hover:text-white dark:hover:text-white font-semibold px-3 py-2 rounded-md transition-colors"
                  >
                    <item.icon size={20} />
                    <span>
                      <Link href={item.link}>{item.name}</Link>
                    </span>
                  </li>
                ))}
                <li>
                  <a
                    className=" bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
                    href="tel:+2348035027408"
                  >
                    Call: +234 8035027408
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
