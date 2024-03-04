import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/orto1.jpeg" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/orto2.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/orto3.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>  
    <div id="slide4" className="carousel-item relative w-full justify-center">
        <Image src="/orto4.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>  
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6">POLIKLINIK SPESIALIS BEDAH ORTHOPEDI DAN TRAUMATOLOGI

</h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title">Apa itu Poli Spesialis Bedah Orthopedi dan Traumatologi?</h2>
        <ul> 
            <li>Poliklinik Spesialis Bedah Orthopedi dan Traumatologi adalah unit pelayanan kesehatan yang fokus pada diagnosis, perawatan, dan pencegahan masalah ortopedi (tulang dan sendi) serta penanganan cedera atau trauma yang memengaruhi sistem muskuloskeletal. Poliklinik ini dikhususkan untuk menyediakan layanan medis bagi pasien yang mengalami masalah tulang, sendi, otot, dan jaringan lunak terkait.</li>
        <h2 className="card-title">Apa Saja Manfaat Poli Spesialis Bedah Orthopedi dan Traumatologi?</h2>
            <li>•Penanganan Cedera dan Trauma: Poliklinik ini dapat memberikan penanganan cepat dan tepat untuk cedera dan trauma yang melibatkan tulang, sendi, otot, dan struktur muskuloskeletal lainnya. Pelayanan ini termasuk perawatan darurat, penyesuaian, atau pembedahan jika diperlukan.</li>
            <li>•Perawatan Ortopedi Terpadu: Pasien dapat memperoleh perawatan terpadu yang mencakup berbagai aspek ortopedi, termasuk perawatan konservatif seperti fisioterapi, obat penghilang rasa sakit, dan terapi rehabilitasi, serta pilihan pembedahan jika diperlukan.</li>
        </ul>
       
        </div>
    </div>
    </div>
</section>
  )
}

export default page
