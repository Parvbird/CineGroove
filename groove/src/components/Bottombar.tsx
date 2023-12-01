import { bottombarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Bottombar = (props: Props) => {
  return (
    <section className="bottom-bar overflow-x-scroll overflow-y-hidden ">
      {bottombarLinks.map((link) => {
        // const isActive = pathname === link.route;
        return (
          <Link href={link.route} key={link.label} className="rounded-[10px] flex-center flex-col gap-1 p-2 ">
            <Image src={link.icon} alt={link.label} className="w-5"/>
            {/* <p className="tiny-medium text-gray-600">{link.label}</p> */}
          </Link>
        )
      })}
    </section>
  );
};

export default Bottombar;
