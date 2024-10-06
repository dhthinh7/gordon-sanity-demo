import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png"
import { Input } from "@/components/ui/input";
import SearchIcon from "../icons/SearchIcon";

const HeaderMain = () => {
  return <div className="flex justify-between items-center w-full bg-white px-[30px] py-[10px] mt-8">
    <div className="flex items-center gap-[30px]">
      <Link href=''>
        <Image src={logo} alt="logo" />
      </Link>
      <Link href='/'>
        ABOUT
      </Link>
      <Link href='/'>
        PRODUCTS
      </Link>
      <Link href='/'>
        SERVICES
      </Link>
      <Link href='/'>
        NEWS
      </Link>
      <Link href='/'>
        CAREERS
      </Link>
      <Link href='/'>
        CONTACT
      </Link>

    </div>
    <div className="text-black flex items-stretch relative h-10 min-w-72">
      <Input className="text-sm leading-6 h-full pr-14" placeholder="Search here" />
      <button className="bg-primary flex justify-center items-center absolute right-0 top-0 bottom-0 aspect-square rounded-md rounded-tl-none rounded-bl-none border border-slate-200 focus-visible:ring-1 focus-visible:ring-slate-950">
        <SearchIcon />
      </button>
    </div>
  </div>
};

export default HeaderMain;
