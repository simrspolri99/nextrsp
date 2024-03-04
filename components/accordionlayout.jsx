"use client"
import React, { useState } from 'react';

const AccordionLayout = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const handleAccordionChange = (accordionId) => {
    setSelectedAccordion((prev) => (prev === accordionId ? null : accordionId));
  };

  return (
    <div className="bg-blue-900 text-white h-screen p-4">
      <h2 className="text-2xl font-bold text-center px-10 py-10">Frequently Asked Questions</h2>

      <div className="collapse collapse-arrow max-w-4xl m-auto bg-white p-4 text-black rounded-md shadow-md mb-4">
        <input
          type="radio"
          name="my-accordion-2"
          id="section1"
          checked={selectedAccordion === 'section1'}
          onChange={() => handleAccordionChange('section1')}
        />
        <label htmlFor="section1" className="collapse-title text-lg md:text-xl font-medium">
          BAGAIMANA CARA DAFTAR ONLINE DI RUMAH SAKIT BHAYANGKARA Tk. I PUSDOKKES POLRI
        </label>
        <div className={`collapse-content ${selectedAccordion === 'section1' ? 'open' : 'w-full'}`}>
          <p>Dengan Mengunjungi <a className="link" >http://www.pendaftaranrspolri.com/#/reservasi</a> untuk membuat Jadwal Reservasi Poliklinik</p>
        </div>
      </div>

      <div className="collapse collapse-arrow max-w-4xl m-auto bg-white text-black p-4 rounded-md shadow-md mb-4">
        <input
          type="radio"
          name="my-accordion-2"
          id="section2"
          checked={selectedAccordion === 'section2'}
          onChange={() => handleAccordionChange('section2')}
        />
        <label htmlFor="section2" className="collapse-title text-lg md:text-xl font-medium">
          Penanganan Gawat Darurat
        </label>
        <div className={`collapse-content ${selectedAccordion === 'section2' ? 'open' : 'w-full'}`}>
          <p>Jika anda atau keluarga anda mengalami kondisi Gawat Daruat, segera mencari pertolongan
            ke IGD RS Terdekat Atau IGD RS POLRI anda dapat menghubungi nomor 021-8093288 atau 144 
            (Penanganan Khusus Kondisi Darurat).
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow max-w-4xl m-auto bg-white p-4 text-black rounded-md shadow-md mb-4">
        <input
          type="radio"
          name="my-accordion-2"
          id="section3"
          checked={selectedAccordion === 'section3'}
          onChange={() => handleAccordionChange('section3')}
        />
        <label htmlFor="section3" className="collapse-title text-lg md:text-xl font-medium">
          SPGDT Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri
        </label>
        <div className={`collapse-content ${selectedAccordion === 'section3' ? 'open' : 'w-full'}`}>
          <p>
            Sisitem Penanggulangan Pasien Gawat Darurat Layanan untuk Menangani pasien
            yang dalam kondisi Gawat Darurat dan harus dibawa ke rumah sakit untuk mendapatkan penanganan
            darurat yang cepat Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri Menyediakan Layanan SPGDT
            dapat mengubungi di nomor 085813045650.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AccordionLayout;
