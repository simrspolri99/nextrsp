import React from 'react';
import Link from 'next/link'

const ButtonSection = () => {
  return (
    <div className="container mx-auto my-8 text-center">
      <h2 className="text-3xl font-bold mb-6">PELAYANAN PASIEN</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-blue-900 p-4 text-white rounded-md text-center">
          <h3 className="text-lg font-semibold mb-2">PENDAFTARAN ONLINE</h3>
          <Link href="http://www.pendaftaranrspolri.com/#/reservasi">
          <button className="bg-white text-blue-900 px-4 py-2 rounded-full hover:bg-orange-200 focus:bg-blue-900 font-black" target="_blank">
            DAFTAR
          </button>
          </Link>
        </div>

        <div className="bg-blue-900 p-4 text-white rounded-md text-center">
          <h3 className="text-lg font-semibold mb-2">AMBULANCE</h3>
          <Link href="tel:0218093288">
          <button className="bg-white text-blue-900 px-4 py-2 rounded-full hover:bg-orange-200 focus:bg-blue-900 font-black" >
            PANGGIL
          </button>
          </Link>
        </div>

        <div className="bg-blue-900 p-4 text-white rounded-md text-center">
          <h3 className="text-lg font-semibold mb-2">SPGDT</h3>
          <Link href=" https://wa.me/085813045650">
          <button className="bg-white text-blue-900 px-4 py-2 rounded-full hover:bg-orange-200 focus:bg-blue-900 font-black">
            PENGAJUAN
          </button>
          </Link>
        </div>

        <div className="bg-blue-900 p-4 text-white rounded-md text-center">
          <h3 className="text-lg font-semibold mb-2">POLI EDELWEISS</h3>
          <Link href="https://wa.me/082114800850">
          <button className="bg-white text-blue-900 px-4 py-2 rounded-full hover:bg-orange-200 focus:bg-blue-900 font-black">
            DAFTAR
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonSection;
