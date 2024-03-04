import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Gawatdarurat = () => {
    return (
    <section>   
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full justify-center">
            <Image src="/igd.jpeg" alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide8" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full justify-center">
            <Image src="/igd3.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full justify-center">
            <Image src="/igd4.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full justify-center">
            <Image src="/igd1.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide5" className="carousel-item relative w-full justify-center">
            <Image src="/igd2.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide6" className="carousel-item relative w-full justify-center">
            <Image src="/igd5.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide7" className="carousel-item relative w-full justify-center">
            <Image src="/igd6.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide8" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide8" className="carousel-item relative w-full justify-center">
            <Image src="/igd7.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div> 
        </div>

    <div className="text-center">
        <h1 className="text-4xl font-bold mt-20 mb-6">INSTALASI GAWAT DARURAT</h1>
        </div>
        <div className='flex flex-wrap justify-center'>
        <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
            <div className="card-body flex flex-col justify-between">
            
            <h2 className="card-title">Apa Itu IGD?</h2>
            <p>IGD adalah unit kesehatan di Rumah Sakit Bhayangkara TK.I Pusdokkes Polri yang menyediakan perawatan segera dan mendesak kepada individu yang mengalami kondisi medis darurat atau kecelakaan. </p>           
            <li>Pertolongan Pertama yang Cepat: IGD Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri memberikan pertolongan pertama secara cepat kepada individu yang mengalami kondisi darurat medis atau kecelakaan. Pelayanan cepat ini dapat menyelamatkan nyawa dan mengurangi risiko komplikasi.</li>
            <li>Penanganan Kondisi Darurat dan Kecelakaan: IGD Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri  dirancang khusus untuk menangani berbagai kondisi darurat medis, seperti serangan jantung, cedera serius, stroke, atau kecelakaan. Ini memungkinkan pemberian perawatan yang sesuai dengan kebutuhan mendesak.</li>
            <li>Dukungan untuk Pelayanan Kesehatan Lainnya: IGD merupakan gerbang utama bagi pasien yang membutuhkan pelayanan kesehatan lanjutan di Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri.  Dari IGD, pasien dapat dipindahkan ke unit-unit perawatan yang lebih spesifik sesuai dengan kebutuhan mereka.</li>
            <p>IGD Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri Menerima pasien 24 Jam dengan kapasitas Bed yang Memadai Siap siaga dalam kondisi Darurat Area JABODETABEK dan sekitarnya.</p>
            <div className="card-actions justify-end">
                <Link href="tel:0218093288">
                <button className="btn" href="tel:0218093288">HUBUNGI</button>
                </Link>
            </div>
            </div>
        </div>
        </div>
    </section>

    )
}

export default Gawatdarurat

