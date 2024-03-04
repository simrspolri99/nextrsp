import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/paru2.jpeg" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/paru1.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/paru3.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>

    <div id="slide4" className="carousel-item relative w-full justify-center">
        <Image src="/paru4.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6">POLIKLINIK SPESIALIS PARU</h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title">Apa Itu Poli Spesialis Paru?</h2>
          <ul>
        <li>Poliklinik Spesialis Paru adalah unit pelayanan kesehatan yang fokus pada diagnosis, pengobatan, dan manajemen berbagai masalah kesehatan yang terkait dengan sistem pernapasan, terutama paru-paru. Poliklinik ini dipimpin oleh dokter spesialis paru atau pulmonologist yang memiliki pengetahuan dan keahlian dalam menangani gangguan pernapasan.</li>
          </ul>
          <h2 className="card-title">Apa Manfaat dari Poli Spesialis Paru?</h2>
        <li>Diagnosis yang Akurat: Poliklinik ini menyediakan pemeriksaan dan evaluasi yang cermat untuk menegakkan diagnosis yang akurat terkait masalah pernapasan, seperti penyakit paru kronis, asma, atau infeksi saluran pernapasan.</li>
        <li>Perawatan yang Sesuai: Pasien menerima perawatan medis yang sesuai dengan jenis dan tingkat keparahan masalah pernapasan mereka. Ini mencakup penggunaan obat-obatan, terapi oksigen, dan perawatan lainnya.</li>
        <li>Pencegahan dan Pengobatan Kanker Paru: Poliklinik ini dapat memberikan layanan untuk deteksi dini dan penanganan kanker paru, termasuk pilihan perawatan seperti kemoterapi, radioterapi, atau pembedahan.</li>
        </div>
    </div>
    </div>
</section>
  )
}

export default page
