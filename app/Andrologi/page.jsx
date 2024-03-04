import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/andro3.jpeg" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/andro1.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/andro2.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6">POLIKLINIK SPESIALIS ANDROLOGI &PSIKOLOGI</h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title">Apa Itu Poli Spesialis Andrologi dan Psikologi?</h2>
       <li>Layanan Andrologi: Poliklinik ini menyediakan layanan pemeriksaan dan pengobatan untuk masalah kesehatan pria, seperti gangguan reproduksi, disfungsi ereksi, masalah hormonal, dan masalah kesehatan seksual lainnya.</li>
       <li>Layanan Psikologi: Poliklinik ini dapat menyediakan layanan konseling, terapi, atau intervensi psikologis untuk membantu individu mengatasi masalah kesehatan mental yang mungkin terkait dengan masalah andrologi atau secara umum.</li> 
       <h2 className="card-title">Apa Saja Manfaat Poliklinik Spesialis Andrologi dan Psikologi?</h2>
       <li> Kesehatan Mental dan Emosional: Layanan konseling dan terapi psikologis untuk mengatasi stres, kecemasan, atau masalah kejiwaan lain yang dapat memengaruhi kesehatan.
Pemberian dukungan psikologis untuk mengatasi dampak emosional dari masalah kesehatan fisik.</li>
        <li>Edukasi Kesehatan: Penyuluhan dan edukasi mengenai pentingnya menjaga kesehatan. Informasi terkait dengan gaya hidup sehat, diet, dan kebiasaan lain yang dapat mendukung kesehatan.</li>
        </div>
    </div>
    </div>
</section>
  )
}

export default page
