import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/bedah1.jpeg" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide6" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/bedah2.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/bedah3.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full justify-center">
        <Image src="/bedah4.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide5" className="carousel-item relative w-full justify-center">
        <Image src="/bedah5.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide6" className="carousel-item relative w-full justify-center">
        <Image src="/bedah6.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide5" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6"> POLIKLINIK SPESIALIS BEDAH UMUM</h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        <h2 className="card-title">Apa itu Poli Spesialis Bedah Umum?</h2>
        <ul> 
            <li>Poliklinik spesialis bedah umum adalah unit pelayanan kesehatan yang menyediakan layanan medis khusus dalam bidang bedah umum. Pelayanan di Poliklinik Spesialis Bedah Umum mencakup pemeriksaan, konsultasi, tindakan bedah minor, serta pemantauan pascaoperatif. </li>
       </ul>
       <h2 className="card-title">Apa Saja Manfaat Pada Poli Spesialis Bedah Umum?</h2>
       <ul>
        <li> •Diagnosis dan Konsultasi Profesional: Pasien dapat berkonsultasi dengan dokter bedah umum yang memiliki pengetahuan dan keahlian khusus dalam mendiagnosis serta menilai masalah kesehatan yang memerlukan tindakan bedah.</li>
        <li> •Rekomendasi Perawatan: Dokter bedah umum dapat memberikan rekomendasi perawatan yang sesuai dengan kondisi pasien. Ini bisa mencakup opsi pengobatan konservatif atau tindakan bedah, tergantung pada tingkat keparahan dan jenis masalah kesehatan.</li>
       </ul>
      
        </div>
    </div>
    </div>
</section>
  )
}

export default page
