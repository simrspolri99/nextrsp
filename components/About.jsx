// AboutRS.jsx
import React from 'react';
import Image from 'next/image';

const AboutRS = () => {
  return (
    <div className="bg-blue-900 w-full text-white m-auto p-8 rounded-md">
      <h2 className="text-3xl font-bold mb-6">Kenapa Memilih Kami?</h2>
      <h3 className="text-3xl font-light">Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri</h3>
      <h3 className="text-3xl font-light mb-6">Menjadi Pusat Rujukan Nasional dan Memiliki Tim Dokter Profesional</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="bg-white text-black p-4 rounded-md shadow-md">
          <Image src="/6.png" alt="Image 1" width="1000" height="1000" className="w-full h-52 object-cover mb-4 rounded-md" />
          <h4 className="text-lg font-semibold">Pelayanan Presisi & Paripurna</h4>
          <p className="text-sm">
            Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri Berkomitmen Memberikan Pelayanan Terbaik Kami.
          </p>
        </div>

        {/* Column 2 */}
        <div className="bg-white text-black p-4 rounded-md shadow-md">
          <Image src="/4.png" alt="Image 2" width="1000" height="1000" className="w-full h-52 object-cover mb-4 rounded-md" />
          <h4 className="text-lg font-semibold">Tenaga Medis Profesional</h4>
          <p className="text-sm">
            Rumah Sakit Kami Memiliki Tenaga Medis Profesional dalam Bidang Kedokteran dan Kepolisian.
          </p>
        </div>

        {/* Column 3 */}
        <div className="bg-white text-black p-4 rounded-md shadow-md">
          <Image src="/2.png" alt="Image 3" width="1000" height="1000" className="w-full h-52 object-cover mb-4 rounded-md" />
          <h4 className="text-lg font-semibold">Fasilitas Penunjang Terbaik</h4>
          <p className="text-sm">
            Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri Memiliki Beragam Fasilitas Penunjang
            Kesehatan Terbaik.
          </p>
        </div>

        {/* Column 4 */}
        <div className="bg-white text-black p-4 rounded-md shadow-md">
          <Image src="/5.jpeg" alt="Image 4" width="1000" height="1000" className="w-full h-52 object-cover mb-4 rounded-md" />
          <h4 className="text-lg font-semibold">Layanan Gawat Darurat</h4>
          <p className="text-sm">
            Rumah Sakit Kami Melayani Pasien Gawat Darurat 24 Jam dengan Jumlah Kapasitas Bed yang memadai.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutRS;
