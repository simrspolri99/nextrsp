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
                    <Image src="/orthodrCarles.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>
            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/orthodrDina.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>

            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/orthodrHeru.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>

            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/orthodrSigit.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>

            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/orthodrSumpada.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>

            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/orthodrWira.png" width="1000" height="1000" alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* Content Here */}
                </div>
            </div>

            <div className="card m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
                <figure>
                    <Image src="/orthodrYogi.png" width="1000" height="1000" alt="Shoes" />
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
