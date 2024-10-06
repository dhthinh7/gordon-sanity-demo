import React from "react";
import SectionWrapper from "../SectionWrapper";

const Hero = () => {
  return <div className="relative min-h-[820px]1 h-screen" style={{
    backgroundImage: `url('/images/s0.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    {/* <Image src={s0} height={820} width={1200} loading="lazy" alt="hero" className="object-cover object-center w-full min-h-[500px]" /> */}
    <div className="bg-overlay absolute top-0 h-full w-full z-10"></div>
    <SectionWrapper className="pt-72 pb-32 z-20 relative">
      <div className="w-[600px] z-20">
        <div className="flex flex-col gap-8">
          <h1 className="text-[140px] font-medium leading-[100px] text-white font-SignPainter">&quot;We keep<br />you moving&quot;</h1>
          <h3 className="text-4xl font-semibold capitalize text-white font-sans leading-[48px]">Proudly serving Canadian industry for over 80 years</h3>
        </div>
        <div>
          {/* <Button */}
        </div>

      </div>
    </SectionWrapper>
  </div>;
};

export default Hero;
