import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type TSectionWrapperProps = {
  className?: string
  children: ReactNode
}

const SectionWrapper = ({ className, children }: TSectionWrapperProps) => {
  return <section className={cn('max-w-screen-xl px-8 mx-auto', className)}>{children}</section>;
};

export default SectionWrapper;
