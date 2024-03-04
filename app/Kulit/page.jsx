import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/kulit1.jpeg" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/kulit2.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/kulit3.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6">POLIKLINIK SPESIALIS KULIT DAN KELAMIN</h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title">Apa Itu Poli Spesialis Kulit Dan Kelamin?</h2>
       <li>Poliklinik Spesialis Kulit dan Kelamin adalah unit pelayanan kesehatan yang mengkhususkan diri dalam diagnosis, pengobatan, dan pencegahan masalah kesehatan kulit dan kelamin. Poliklinik ini dipimpin oleh dokter spesialis kulit dan kelamin yang memiliki keahlian khusus dalam menangani berbagai kondisi yang memengaruhi kulit dan organ kelamin.</li>
       <h2 className="card-title">Apa Saja Manfaat Poli Spesialis Kulit Dan Kelamin?</h2>
       <li>Diagnosis dan Penanganan Kondisi Kulit: Poliklinik ini menyediakan pemeriksaan dan penilaian oleh dokter spesialis kulit dan kelamin untuk menegakkan diagnosis yang akurat dan memberikan penanganan yang sesuai untuk berbagai kondisi kulit.</li> 
       <li>Perawatan untuk Masalah Kulit Umum: Pasien dapat menerima perawatan untuk masalah kulit umum seperti jerawat, eksim, dermatitis, dan infeksi kulit, yang dapat mencakup penggunaan obat-obatan topikal atau sistemik.</li>
       <li>Pencegahan dan Edukasi: Dokter memberikan edukasi kepada pasien mengenai cara menjaga kesehatan kulit, pencegahan terhadap paparan berbahaya, dan penggunaan pelindung matahari.</li> 
       </div>
    </div>
    </div>
</section>
  )
}

export default page
