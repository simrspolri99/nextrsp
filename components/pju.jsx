import React from 'react';
import Image from 'next/image';

const Pju = () => {
  return (
    <div className="bg-blue-900 h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-1xl md:text-3xl lg:text-4xl text-center font-bold mb-5 ">
        PEJABAT UTAMA RUMAH SAKIT
      </h2>
      <h2 className="text-1xl md:text-3xl lg:text-4xl text-center font-bold mb-7">
        BHAYANGKARA Tk. I PUSDOKKES POLRI
      </h2>
      <div className="relative">
        <Image src="/pju.jpeg" alt="rsbp1" width="720" height="480" className="mt-5 rounded-box max-w-5xl mx-auto w-full" />
        <div className="absolute inset-0"></div>
      </div>
    </div>
  );
};

export default Pju;
