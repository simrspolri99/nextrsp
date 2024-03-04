import React from 'react';

const Pendidikan = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 flex justify-center flex-col items-center">
        <h1 className="text-4xl font-black mt-20 text-center">Pelatihan</h1>
        <section className="card w-full mt-7 md:max-w-2xl bg-blue-900 text-white">
          <div className="card-body">
            <h2 className="card-title text-2xl md:text-3xl">Pelatihan Rumah Sakit Bhayangkara TK. I Pusdokkes Polri</h2>
            <p>Rumah Sakit Bhayangkara TK. I Pusdokkes Polri turut Serta mendukung perkembangan SDM untuk Memberikan Kesejahteraan pada Pekerja dan memperluas pengetahuan dengan pelatihan  dalam hal ini 
                Rumah Sakit Bhayangkara TK. I Pusdokkes Polri Membuaka Program Pelatihan Baik untuk internal dan external dan juga kami menerima kerjasama pelatihan</p>
            <p>Tahap Pengajuan Kerjasama Pelatihan</p>
            <ul className="list-disc pl-5">
                <li>Tahap 1. Peneliti mengirim surat pengantar resmi dari institusi yang ditujukan kepada 
                    Direktur Utama Rumah Sakit Bhayangkara TK. I Pusdokkes Polri. Surat dikirimkan melalui alamat surel rumahsakitpolrikramatjati@gmail.com</li>
                <li>Tahap 2. Pihak kedua Melakukan Presentasi Tentang Pelatihan Apa Saja yang akan Diberikan</li>
                <li>Tahap 3. Pihak Kedua meakukan Koordinasi untuk Penentuan Tanggal dan Tempat Pelatihan</li>
                <li>Tahap 4. Pihak Kedua Melaksana Pelatihan .</li>
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
