"use client"
import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const accordionItems = [
    { title: 'Persetujuan Untuk Perawatan dan Pengobatan',
    content:  <ul>
              <li> ◉ Anda menyetujui perawatan di Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri sebagai pasien rawat jalan atau Rawat Inap.</li> 
              <li> ◉ Pengobatan melibatkan pemeriksaan x-ray/radiologi, tes darah, perawatan rutin, prosedur seperti infus/suntikan, dan evaluasi (wawancara dan pemeriksaan fisik).</li>
              <li> ◉ Persetujuan tidak termasuk tindakan invasif (misalnya, operasi) atau tindakan berisiko tinggi.</li>
              <li> ◉ Jika Anda memutuskan untuk menghentikan perawatan, Anda menyadari bahwa rumah sakit atau dokter tidak bertanggung jawab atas hasil yang merugikan.</li>
              </ul>
    },
    { title: 'Kewajiban Pasien', content: <ul>
                                <li> ◉ Menggunaka Fasilitas Rumah sakit Secara betanggung jawab.</li>
                                <li> ◉ menghormati hak pasien yang lain, pengunjung dan hak tenaga kesehatan serta petugas rumah sakit.</li>
                                <li> ◉ memberikan informasi mengenai kemampuan finansial dan jaminan kesehatan pasien.</li>
                                <li> ◉ mematuhi rencana terapi yang telah diberikan tenaga kesehatan rumah sakit.</li>
                                <li> ◉ menerima segala konsekuensi atas keputusan pribadinya menolak rencana kesehatan dan tidak mematuhi petunjuk yang diberikan tenaga kesehatan.</li>
                                </ul> 
                                },
    { title: 'Hak Pasien', content: <ul>
                                <li> ◉ Memperoleh layanan yang manusiawi, adil, jujur dan tanpa diskriminasi.</li>
                                <li> ◉ memperoleh layanan bermutu sesuai standar profesi dan standar prosedur operasional yang berlaku.</li>
                                <li> ◉ memperoleh layanan efektif dan efisien sehingga pasien terhindar darikerugian fisik.</li>
                                <li> ◉ mengajukan pengaduan akan kualitas playnana yang di dapatkan</li>
                                <li> ◉ memilih dokter dan kelas perawatan sesuai keinginannya sesuai peraturan yang berlaku di rumah sakit.</li>
                                <li> ◉ mendapatkan kerahasiaan privasi penyakit yang di derita pasien termasuk data-data medis pasien</li>
                                <li> ◉ menerima konsultasi tentang penyakit yang di deritanya kepada dokter lain yang mempunyai surat izin praktik baik di dalam maupun luar rumah sakit.</li>
                                <li> ◉ memberikan persetujuan atau menolak atas tindakan yang dilakukan oleh tenaga kesehatan terhadap penyakit yang di derita.</li>
                                </ul> 
                                },
    
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl text-center font-bold mt-6">ADMISI</h1>
        <p className="text-gray-600 text-center mb-6">INFORMASI GENERAL CONSENT PELAYANAN KESEHATAN</p>
        
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white mb-2 p-4 rounded overflow-hidden transition-all duration-300"
          >
            <div
              className="flex items-center justify-between cursor-pointer text-center"
              onClick={() => handleToggle(index)}
            >
              <div className="text-xl font-medium">{item.title}</div>
              <div>{openIndex === index ? '-' : '+'}</div>
            </div>
            <div
              className={`mt-2 ${
                openIndex === index ? 'block' : 'hidden'
              } transition-all duration-300`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
