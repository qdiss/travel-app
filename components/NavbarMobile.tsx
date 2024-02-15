import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type NavbarMobileProps = {
  closeMenu: () => void;
};

const NavbarMobile = ({ closeMenu }: NavbarMobileProps) => {
  return (
    <aside className="flexBetween max-container padding-container relative z-50 py-5 bg-green-50 transition ease-in-out h-full">
      <ul className="flex flex-col gap-10 ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-white flexStart cursor-pointer pb-1.5 transitio hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
        <Image
          src="/close.svg"
          alt="close"
          width={32}
          height={32}
          className="rounded-full absolute top-5 right-5 cursor-pointer transition-all hover:scale-110"
          onClick={closeMenu}
        />
      </ul>
    </aside>
  );
};

export default NavbarMobile;
