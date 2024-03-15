import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const lapor = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="grid place-items-center">
        <div className="card lg:card-side bg-base-100 shadow-xl w-full md:w-3/4 lg:w-1/2 flex">
          <div className="flex-shrink-0">
            <Image src="/span.jpeg" width={330} height={330} className="object-center" alt="Span" />
          </div>
          <div className="card-body ml-4">
            <h2 className="card-title">SP4N LAPOR</h2>
            <p>Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional (SP4N) - Layanan Aspirasi dan Pengaduan Online Rakyat (LAPOR!) adalah layanan penyampaian semua aspirasi dan pengaduan masyarakat</p>
            <div className="card-actions justify-end">
            <Link href="https://www.lapor.go.id/">
              <button className="btn bg-blue-900 text-white">LAPOR</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default lapor;