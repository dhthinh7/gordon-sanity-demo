import React from "react";
import PhoneIcon from "../icons/PhoneIcon";
import { Button } from "@/components/ui/button";

const HeaderTop = () => {
  return <div className="flex justify-between items-center border-b border-border py-[13px]">
    <div className="flex items-center gap-10">
      <div className="text-white text-sm font-semibold leading-6 flex items-center justify-center gap-2">
        <PhoneIcon />
        <div>Call: <a href="tel:+6049401627">(604) 940-1627</a></div>
      </div>
      <div className="text-white text-sm font-semibold leading-6 flex items-center justify-center gap-2">
        <PhoneIcon />
        <div>Office hours: Monday - Friday (8:00am to 5:00pm)</div>
      </div>
    </div>
    <Button variant="outline" className="bg-transparent border-white text-white text-[13px] font-semibold leading-6 uppercase">STAFF LOGIN</Button></div>;
};

export default HeaderTop;
