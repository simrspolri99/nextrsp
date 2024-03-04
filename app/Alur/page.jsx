import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mt-24">ALUR PELAYANAN</h1>
      <div className="flex flex-col mt-8 items-center space-y-4 lg:flex-row">
        <div className="mb-4 px-10 lg:mb-0">
          <Image src="/alur1.jpeg" alt="alur" width="350" height="150" />
          <h1 className="text-xl text-center font-bold mt-2">Pasien Online</h1>
        </div>
        <div className="mb-4 px-10 lg:mb-0">
          <Image src="/alur2.jpeg" alt="alur" width={350} height={150} />
          <h1 className="text-xl text-center font-bold mt-2">Pasien Baru</h1>
        </div>
        <div className="mb-4 px-10 lg:mb-0">
          <Image src="/alur3.jpeg" alt="alur" width={350} height={150} />
          <h1 className="text-xl text-center font-bold mt-2">Pasien Lama</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
