import React from 'react'
import Image from 'next/image'

const Radiologi = () => {
    return (
    <section>   
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full justify-center">
            <Image src="/radiologi1.jpeg" alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full justify-center">
            <Image src="/radiologi2.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full justify-center">
            <Image src="/IMG_1087.png"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full justify-center">
            <Image src="/IMG_1083.png"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full justify-center">
            <Image src="/IMG_1059.png"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>

        </div>

    <div className="text-center">
        <h1 className="text-4xl font-bold mt-20 mb-6">MRI & RADIOLOGI</h1>
        </div>
        <div className='flex flex-wrap justify-center'>
        <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
            <div className="card-body flex flex-col justify-between">
            
            
            <h2 className="card-title">Apa Itu Radiologi?</h2>
            <p>Pemeriksaan Radiologi Adalah Pemeriksaan dengan menggunakan teknologi pencitraan untuk mendeteksi dan mengobati suatu penyakit.
                pemeriksaan radiologi berguna untuk membantu dokter melihat kondisi dalam bagian tubuh pasien
            </p>
            <ul>
                <li> • Pemeriksaan Rotgen </li>
                <li> • Pemeriksaan Magnetic Resonance Imaging </li>
                <li> • Pemeriksaan CT-SCAN </li>
                <li> • Pemeriksaan USG (Ultra Sonografi)</li>
                <li> • Pemeriksaan Panoramik </li>
            </ul>
            <h2 className="card-title"> Berikut adalah beberapa tarif untuk berbagai jenis pemeriksaan medis:</h2>
            <li>Pemeriksaan Toraks: Rp. 80.000,-</li>
           <li> CT Scan Kepala: Rp. 790.000,-</li>
           <li>USG 4 Dimensi: Rp. 390.000,-</li>
           <li>MRI Kepala dengan Kontras: Rp. 2.440.000,-</li>
           <h2 className=" font-bold mt-2 ">Tarif Dapat Berubah Sewaktu-waktu</h2>
            </div>
        </div>
        </div>
    </section>

    )
}

export default Radiologi
