import React from 'react';
import Image from 'next/image';

const Struktur = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col items-center"> {/* Menambahkan ruang padding untuk perangkat seluler dan menyusun elemen secara vertikal dan di tengah */}
      <h1 className="text-4xl text-center text-black font-medium mt-14 md:mt-8"></h1>
        <h2 className="mt-6 mb-6 text-3xl font-bold">Prestasi Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri</h2>
      {/* Menambahkan kelas mx-auto untuk membuat gambar berada di tengah */}
      <Image src="/lafki.jpg" width="1000" height="1000" alt="rsbp1" className="mt-5 rounded-box max-w-5xl mx-auto w-full" />

      {/* Menambahkan kelas mx-auto untuk membuat gambar berada di tengah */}
      <Image src="/serti.png" alt="rsbp1" width="1000" height="1200" className="mt-5 rounded-box max-w-5xl mx-auto w-full" />

      <Image src="/serti2.png" alt="rsbp1" width="1000" height="1200" className="mt-5 rounded-box max-w-5xl mx-auto w-full" />

    </div>
  );
}

export default Struktur;
