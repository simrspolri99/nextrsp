import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Unggulan = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mt-8">FASILITAS UNGGULAN</h1>
      <div className="flex overflow-x-scroll p-4 sm:p-8">
        {/* Repeat the same structure for additional cards */}
        <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
          <figure>
            <Image src="/mcu1.jpeg" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">Medical Check Up</h2>
             
            <div className="card-actions justify-end mt-4">
              <Link href="/Checkup">
                <button className="btn bg-blue-900 px-6 text-white">KUNJUNGI</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
          {/* ... Card content */}
          <figure>
            <Image src="/IMG_1209.png" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">Paviliun Edelweiss</h2>
             
            <div className="card-actions justify-end mt-4">
              <Link href="/Edelweiss">
                <button className="btn bg-blue-900 px-6 text-white">KUNJUNGI</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
          {/* ... Card content */}
          <figure>
            <Image src="/IMG_1732.png" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">Instalasi Gawat darurat</h2>
             
            <div className="card-actions justify-end mt-4">
              <Link href="/Gawatdarurat">
                <button className="btn bg-blue-900 px-6 text-white">KUNJUNGI</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
          {/* ... Card content */}
          <figure>
            <Image src="/IMG_1092.png" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">MRI & Radiologi</h2>
             
            <div className="card-actions justify-end mt-4">
              <Link href="/Radiologi">
                <button className="btn bg-blue-900 px-6 text-white">KUNJUNGI</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
          {/* ... Card content */}
          <figure>
            <Image src="/IMG_1507.png" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">ESWL</h2>
             
            <div className="card-actions justify-end mt-4">
              <Link href="/Eswl">
                <button className="btn bg-blue-900 px-6 text-white">KUNJUNGI</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
          {/* ... Card content */}
          <figure>
            <Image src="/DSC07077.png" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">Hiperbarik</h2>
             
            <div className="card-actions justify-end mt-4">
              <Link href="/Hiperbarik">
                <button className="btn bg-blue-900 px-6 text-white">KUNJUNGI</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
          {/* ... Card content */}
          <figure>
            <Image src="/IMG_1029.png" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">Fisioterapi</h2>
             
            <div className="card-actions justify-end mt-4">
              <Link href="/Fisioterapi">
                <button className="btn bg-blue-900 px-6 text-white">KUNJUNGI</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
          {/* ... Card content */}
          <figure>
            <Image src="/IMG_1172.png" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">Hemodialisa</h2>
             
            <div className="card-actions justify-end mt-4">
              <Link href="/Hemodialisa">
                <button className="btn bg-blue-900 px-6 text-white">KUNJUNGI</button>
              </Link>
            </div>
          </div>
        </div>
      
        <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
          {/* ... Card content */}
          <figure>
            <Image src="/dna1.jpeg" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">Dna</h2>
             
            <div className="card-actions justify-end mt-4">
              <Link href="/Dna">
                <button className="btn bg-blue-900 px-6 text-white">KUNJUNGI</button>
              </Link>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Unggulan;
