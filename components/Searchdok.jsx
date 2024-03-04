// components/SearchDoctorForm.js
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchDoctorForm = () => {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    // Lakukan logika pencarian dokter di sini
    // Misalnya, Anda dapat meneruskan parameter pencarian ke halaman hasil pencarian
    router.push(`/search-results?name=${encodeURIComponent(name)}&specialization=${encodeURIComponent(specialization)}`);
  };

  const specializations = [
    'Dokter Umum',
    'Dokter Gigi',
    'Dokter Spesialis Jantung',
    'Dokter Spesialis THT',
    'Dokter Spesialis Mata',
    'Dokter Spesialis Penyakit Dalam',
    'Dokter Spesialis Gizi',
    'Dokter Spesialis Paru',
    'Dokter Spesialis Bedah',
    'Dokter Spesialis Okupasi',
    'Dokter Spesialis Pulmonologi',
    'Dokter Spesialis Kesehatan Anak',
    'Dokter Spesialis Orthopedi',
    'Dokter Spesialis Neurologi',
    'Dokter Spesialis Urologi',
    'Dokter Spesialis Kedokteran Jiwa',
    'Dokter Spesialis Anastesi',
    'Dokter Spesialis Anak',
    'Dokter Spesialis Bedah Plastik',
    'Dokter Spesialis Forensik',
    'Dokter Spesialis Bedah Mulut',
    'Dokter Spesialis Bedah Plastik',
    // Tambahkan spesialisasi lainnya sesuai kebutuhan
  ];

  return (
    <div className="card bg-white h-72 shadow-md p-4 size-10/12 mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">CARI DOKTER</h2>
      <form>
        <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700 mb-2">Nama Dokter:</label>
        <input
          type="text"
          id="doctorName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-2 rounded w-full"
        />

        <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-2">Spesialisasi:</label>
        <select
          id="specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Pilih Spesialisasi</option>
          {specializations.map((spec, index) => (
            <option key={index} value={spec}>{spec}</option>
          ))}
        </select>

        <button type="button" onClick={handleSearch} className="bg-blue-900 text-white p-2 rounded w-full mt-4">
          Cari Dokter
        </button>
      </form>
    </div>
  );
};

export default SearchDoctorForm;
