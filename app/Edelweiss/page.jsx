import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Edelweiss = () => {
    return (
    <section>   
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full justify-center">
            <Image src="/edelweis1.jpeg" alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full justify-center">
            <Image src="/edelweis2.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full justify-center">
            <Image src="/edelweis3.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full justify-center">
            <Image src="/edelweis5.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full justify-center">
            <Image src="/edelweis6.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full justify-center">
            <Image src="/edelweis7.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide7" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full justify-center">
            <Image src="/edelweis8.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        </div>

        

    <div className="text-center">
        <h1 className="text-4xl font-bold mt-20 mb-6">PAVILIUN EDELWEISS PRESISI</h1>
        </div>
        <div className='flex flex-wrap justify-center'>
        <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
            <div className="card-body flex flex-col justify-between">
            <h2 className="card-title">PELAYANAN YANG TERSEDIA</h2>
            <ul>
                <li> • Pemeriksaan Dokter Spesialis</li>
                <li> • Pemeriksaan Laboratorium</li>
                <li> • Pemeriksaan Radiologi</li>
                <li> • Pemeriksaan Kefarmasian</li>
            </ul>
            <h2 className="card-title">Apa Fasilitas yang diberikan?</h2>
            <ul>
                <li> • Free wifi</li>
                <li> • Free Snack</li>
                <li> • Ruang Tunggu Nyaman</li>
                <li> • Parkir gratis, Aman & Mudah di Akses</li>
                <li> • Pendaftaran langsung tanpa Antri</li>
                <li> • Akses VIP langsung Pendukung Kesehatan</li>
                <li> • Akes Laboratorium dan Apotek Pribadi</li>
            </ul>
            <ul>
                <li> • Senin - Jumat</li>
                <li> • 08.00 - 18.00 WIB</li>
                <li> • Sabtu</li>
                <li> • 08.00 - 12.00 WIB</li>
            </ul>
            <ul>
                <li> • Whatsapp 082114800850</li>
                <li> • Telp 021 - 80932888 (Ext.220)</li>
            </ul>
            <div className="card-actions justify-end">
                <Link href="https://wa.me/082114800850">
                <button className="btn">HUBUNGI</button>
                </Link>
            </div>
            </div>
        </div>
        </div>
    </section>

    )
}

export default Edelweiss



