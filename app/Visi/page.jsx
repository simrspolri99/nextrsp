import React from 'react';
import Image from 'next/image';

const Visi = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col items-center"> {/* Menambahkan ruang padding untuk perangkat seluler dan menyusun elemen secara vertikal dan di tengah */}
      <h1 className="text-4xl text-center text-black font-medium mt-20 md:mt-14">Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri</h1>

      {/* Menambahkan kelas mx-auto untuk membuat gambar berada di tengah */}
      <Image src="/GEDUNG OKE.jpeg" alt="rsbp1" width="1368" height="768" className="mt-5 rounded-box max-w-5xl mx-auto w-full" /> 

      {/* Menambahkan kartu di bawah gambar */}
      <div className="card max-w-3xl bg-blue-900 text-center text-white mt-5">
        <div className="card-body flex flex-col items-center justify-center">
          <h2 className="card-title text-2xl font-bold">VISI</h2>
          <p className="text-lg">MENJADI RUMAH SAKIT UNGGULAN DALAM BIDANG KESEHATAN DAN KEDOKTERAN KEPOLISIAN TINGKAT NASIONAL</p>
        </div>
      </div>

    <div className="card max-w-3xl bg-blue-900 text-white mt-5">
        <div className="card-body flex flex-col items-center justify-center">
          <h2 className="card-title text-2xl font-bold">MISI</h2>
          <ul>
            <li>1. MEMBERIKAN PELAYANAN KESEHATAN SECARA PRIMA DAN PARIPURNA YANG TERSTANDARISASI</li>
            <li>2. MEMBERIKAN DUKUNGAN KEDOKTERAN KEPOLISIAN SESUAI KEBUTUHAN OPERASIONAL POLRI SECARA OPTIMAL DAN PARIPURNA</li>
            <li>3. MEMILIKI SDM YANG PROFESIAONAL, ETIS, KOMPETITIF, UNGGUL DAN BERMORAL</li>
            <li>4. MELAKSANAKNAN KESELAMATAN PASIEN YANG TERSTANDARISASI</li>
            <li>5. MENYIAPKAN SARANA DAN PRASARANA SERTA ALAT- ALAT KESEHATAN YANG TERKINI MENJADI TEMPAT PENDIDIKAN DAN PENELITIAN TENAGA KESEHATAN YANG TERPANDANG</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Visi;
