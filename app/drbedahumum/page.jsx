import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="mt-24 flex flex-col items-center">
        <h1 className="text-center text-3xl font-black mb-8">Jadwal Dokter</h1>
        <div className="flex flex-wrap justify-center">
            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/umumdrDimas.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>
            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/umumdrGanesa.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>

            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/umumdrHarry.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>

            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/umumdrIsArifin.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>

            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/umumdrJeffrison.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>

            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/umumdrMaurits.jpg" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>

            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/umumdrShanty.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>

            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/umumdrSumidi.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Page;
