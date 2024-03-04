import React from 'react';

const Pendidikan = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 flex justify-center flex-col items-center">
        <h1 className="text-4xl font-black mt-20 text-center">Penelitian</h1>
        <section className="card w-full mt-7 md:max-w-2xl bg-blue-900 text-white">
          <div className="card-body">
            <h2 className="card-title text-2xl md:text-3xl">Penelitian Rumah Sakit Bhayangkara TK. I Pusdokkes Polri</h2>
            <p>Penelitian adalah kegiatan yang dilakukan menurut kaidah dan metode ilmiah secara sistematis untuk memperoleh 
                informasi, data, dan keterangan yang berkaitan pemahaman dan pembuktian kebenaran atau ketidakbenaran 
                suatu asumsi dan/atau hipotesis di bidang ilmu pengetahuan dan teknologi serta menarik kesimpulan ilmiah bagi 
                keperluan kemajuan ilmu pengetahuan dan/atau teknologi.</p>
            <p>Tahap Pengajuan Penelitian</p>
            <ul className="list-disc pl-5">
                <li>Tahap 1. Peneliti mengirim surat pengantar resmi dari institusi yang ditujukan kepada Direktur Utama 
                    Rumah Sakit Bhayangkara TK. I Pusdokkes Polri. Surat dikirimkan melalui alamat surel hrumahsakitpolrikramatjati@gmail.com</li>
                <li>Sehat Jasmani Rohani</li>
                <li>Tahap 2. Peneliti mengajukan pendaftaran Kaji Etik Penelitian. </li>
                <li>Tahap 3. Peneliti mendapatkan surat izin lokasi penelitian setelah menyelesasikan proses izin lokasi penelitian di Unit Diklit. </li>
                <li>Tahap 4. Peneliti dipersilakan memulai pelaksanaan penelitian apabila telah selesai melewati semua proses di atas.</li>
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
