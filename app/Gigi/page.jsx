import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/gigi1.jpeg" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/gigi2.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/gigi3.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full justify-center">
        <Image src="/gigi4.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6">POLIKLINIK SPESIALIS GIGI DAN MULUT</h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title">Apa Itu Poli Spesialis Gigi dan Mulut?</h2>
        <ul>
        <li>
Poliklinik Spesialis Gigi dan Mulut adalah fasilitas pelayanan kesehatan yang menyediakan layanan medis dan perawatan khusus untuk masalah kesehatan gigi dan mulut. Poliklinik ini terutama diarahkan untuk diagnosis, perawatan, dan pencegahan berbagai kondisi dan penyakit yang berkaitan dengan gigi, gusi, rahang, dan struktur mulut lainnya. Dokter gigi yang bekerja di poliklinik ini adalah spesialis yang memiliki keahlian khusus dalam bidang kedokteran gigi.</li>
        </ul>
        <h2 className="card-title">Apa saja Manfaat Poli Spesialis Gigi dan Mulut?</h2>
        <li>Deteksi dini dan penanganan masalah gigi, seperti karies, sebelum mereka berkembang menjadi masalah yang lebih serius.</li>
        <li>Perawatan dan pengobatan kondisi gigi yang memerlukan tindakan medis, seperti perawatan saluran akar atau restorasi gigi.</li>
        <li>Memberikan informasi dan edukasi kepada pasien tentang pentingnya perawatan gigi dan cara menjaga kesehatan mulut secara optimal.</li>
        </div>
    </div>
    </div>
</section>
  )
}

export default page
