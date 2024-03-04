import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/mata1.jpeg" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide6" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/mata2.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/mata3.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full justify-center">
        <Image src="/mata4.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide5" className="carousel-item relative w-full justify-center">
        <Image src="/mata5.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide6" className="carousel-item relative w-full justify-center">
        <Image src="/mata6.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide5" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6">POLIKLINIK SPESIALIS MATA</h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title">Apa itu Poli Spesialis Mata?</h2>
       <ul>
       <li>Poliklinik Spesialis Mata adalah unit pelayanan kesehatan yang fokus pada diagnosis, perawatan, dan pencegahan masalah kesehatan yang terkait dengan mata dan sistem visual. Poliklinik ini dipimpin oleh dokter spesialis mata atau ophthalmologist yang memiliki pengetahuan khusus dalam mengatasi berbagai gangguan mata dan masalah penglihatan.</li>
       </ul>
       <h2 className="card-title">Apa Saja Manfaat Poli Spesialis Mata?</h2>
       <li>Pengobatan dan Perawatan: Pasien menerima perawatan dan pengobatan yang sesuai dengan kondisi mata mereka, termasuk resep obat, terapi, atau prosedur bedah jika diperlukan.</li>
       <li>Pencegahan Kondisi Mata: Poliklinik ini memberikan saran pencegahan, seperti penggunaan kacamata matahari, praktik kebersihan mata yang baik, dan perubahan gaya hidup untuk menjaga kesehatan mata.</li>
       <li>Edukasi Pasien: Pasien dan keluarganya diberikan edukasi mengenai kondisi mata, perawatan mata yang benar, serta tindakan pencegahan untuk menjaga kesehatan mata jangka panjang.</li>
       </div>
    </div>
    </div>
</section>
  )
}

export default page
