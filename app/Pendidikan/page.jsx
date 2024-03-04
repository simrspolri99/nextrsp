import React from 'react';

const Pendidikan = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 flex justify-center flex-col items-center">
        <h1 className="text-4xl font-black mt-20 text-center">Pendidikan</h1>
        <section className="card w-full mt-7 md:max-w-2xl bg-blue-900 text-white">
          <div className="card-body">
            <h2 className="card-title text-2xl md:text-3xl">Pendidikan Akademi Keperawatan Rumah Sakit Bhayangkara TK. I Pusdokkes Polri</h2>
            <p>Program Studi D3 - S1 Keperawatan</p>
            <p>Persyaratan</p>
            <ul className="list-disc pl-5">
                <li>Lulusan SMA IPA/SMK Keperawatan</li>
                <li>Sehat Jasmani Rohani</li>
                <li>Melampirkan Fotocopy Ijazah Legalisir</li>
                <li>Pas foto 3x4</li>
                <li>Mengikuti Tes Akademik</li>
                <li>Mengikuti Tes Praktik Dasar</li>
            </ul>
            <div className="card-actions mt-4 md:mt-8 flex justify-end">
              <button className="btn">Pendaftaran</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pendidikan;
