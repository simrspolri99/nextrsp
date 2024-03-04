import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/tht1.jpeg" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide5" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/tht2.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/tht3.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full justify-center">
        <Image src="/tht4.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide5" className="carousel-item relative w-full justify-center">
        <Image src="/tht5.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6">POLIKLINIK SPESIALIS THT </h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title">Apa Itu Poli Spesialis THT?</h2>
        <ul>
        <li> Poliklinik Spesialis THT adalah unit pelayanan kesehatan yang fokus pada diagnosis, perawatan, dan pencegahan masalah kesehatan yang terkait dengan Telinga, Hidung, dan Tenggorokan (THT). Poliklinik ini dipimpin oleh dokter spesialis THT atau otorhinolaryngologist yang memiliki keahlian dalam menangani gangguan pada bagian-bagian tersebut.</li>
        </ul>
        <h2 className="card-title">Apa Saja Manfaat Poli Spesialis THT?</h2>
        <li>Diagnosis yang Akurat: Poliklinik ini menyediakan pemeriksaan menyeluruh untuk menegakkan diagnosis yang akurat terkait masalah THT, memungkinkan penanganan yang sesuai.</li>
        <li>Perawatan Medis: Pasien menerima perawatan medis yang sesuai dengan kondisi mereka, seperti obat-obatan untuk mengatasi infeksi, alergi, atau gangguan THT lainnya.</li>
        <li>Pencegahan dan Edukasi: Pasien diberikan saran dan edukasi mengenai langkah-langkah pencegahan, perawatan, dan tindakan yang dapat diambil untuk menjaga kesehatan THT.</li>
        </div>
    </div>
    </div>
</section>
  )
}

export default page