import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/kardiovaskuler1.jpeg" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/kardiovaskuler2.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/kardiovaskuler3.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full justify-center">
        <Image src="/kardiovaskuler4.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6">Instalasi Intervensi Kardiovaskuler</h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title">Apa itu Instalasi Intervensi Kardiovaskuler?</h2>
        <ul> 
            <li>Instalasi Intervensi Kardiovaskuler adalah fasilitas yang dilengkapi dengan peralatan dan tim medis khusus untuk melakukan tindakan intervensi kardiovaskuler. Tindakan intervensi kardiovaskuler adalah prosedur medis yang dilakukan untuk mengobati atau memperbaiki gangguan pada sistem kardiovaskuler, yang melibatkan jantung dan pembuluh darah.</li>
            </ul>
            <h2 className="card-title">Apa Saja Pelayanan yang di Berikan?</h2>
            <ul>
            <li>• Penanganan Penyakit Jantung Koroner: Instalasi intervensi kardiovaskuler efektif dalam menangani penyakit jantung koroner, termasuk prosedur angioplasti koroner dan pemasangan stent untuk memperbaiki pembuluh darah yang menyempit atau tersumbat.</li>
            <li>• Pemantauan dan Diagnosa Akurat: Instalasi ini dilengkapi dengan peralatan pencitraan dan monitoring kardiovaskuler yang canggih, memungkinkan pemantauan dan diagnosa akurat selama dan setelah prosedur.</li>
            <li>• Tim Medis Terlatih: Instalasi ini dikelola oleh tim medis yang terlatih khusus dalam intervensi kardiovaskuler, sehingga dapat memberikan perawatan yang optimal dan sesuai dengan perkembangan terbaru dalam bidang kardiologi.</li>
            </ul>
            </div>
           
    </div>
    </div>
</section>
  )
}

export default page
