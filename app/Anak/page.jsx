import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/anak2.jpeg" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide5" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/anak1.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/anak3.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full justify-center">
        <Image src="/anak4.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide5" className="carousel-item relative w-full justify-center">
        <Image src="/anak5.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6">POLIKLINIK SPESIALIS ANAK </h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title">Apa itu Poliklinik Spesialis Anak?</h2>
        Poliklinik Spesialis Anak adalah pelayanan kesehatan khusus untuk anak-anak mulai dari lahir hingga usia 18 tahun. Tak hanya menitikberatkan pada faktor penunjang kesehatan anak, tetapi juga mengatasi masalah kesehatan, penyakit, kelainan, alergi, dan hal-hal lain yang dapat memengaruhi pertumbuhan dan perkembangan anak.
        
        <h2 className="card-title">Apa Saja Manfaat Poliklinik Spesialis Anak?</h2>
        <li>Pelayanan Kesehatan Terfokus: Poliklinik ini didesain khusus untuk menyediakan perawatan yang terfokus pada kebutuhan kesehatan anak-anak, termasuk diagnosis dan pengobatan penyakit atau masalah kesehatan khusus pada anak.</li>

        <li>Ahli Pediatrik: Poliklinik ini dijalankan oleh dokter spesialis anak (pediatrik) yang memiliki pengetahuan dan keterampilan khusus dalam merawat anak-anak. Mereka dapat memberikan perawatan yang sesuai dengan tahap perkembangan dan kebutuhan anak.</li>
        <li>Pencegahan dan Edukasi: Poliklinik anak sering kali memiliki program pencegahan penyakit dan edukasi kesehatan khusus untuk anak-anak. Ini dapat mencakup imunisasi, konseling gizi, dan informasi penting lainnya bagi orang tua.</li>
        </div>
    </div>
    </div>
</section>
  )
}

export default page
