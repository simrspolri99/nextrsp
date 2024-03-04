import React from 'react'
import Image from 'next/image'

const Eswl = () => {
    return (
    <section>   
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full justify-center">
            <Image src="/IMG_1507.png" alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full justify-center">
            <Image src="/eswl1.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full justify-center">
            <Image src="/eswl2.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full justify-center">
            <Image src="/eswl3.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        </div>

    <div className="text-center">
        <h1 className="text-4xl font-bold mt-20 mb-6">POLIKLINIK ESWL</h1>
        </div>
        <div className='flex flex-wrap justify-center'>
        <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
            <div className="card-body flex flex-col justify-between">
            
            <h2 className="card-title">Apa Itu Poli ESWL?</h2>
            <p>ESWL atau Extracorporeal Shock Wave Lithotripsy adalah suatu prosedur medis yang digunakan untuk menghancurkan batu ginjal, batu empedu, atau batu di saluran kemih tanpa perlu melakukan pembedahan. Proses ini menggunakan gelombang kejut luar tubuh (extracorporeal shock waves) untuk memecahkan batu tersebut menjadi potongan-potongan kecil sehingga dapat keluar dari tubuh secara alami melalui urine.
            </p>
            <h2 className="card-title">Keuntungan ESWL</h2>
            <ul>
                <li> • Tidak invasif (kulit utuh)</li>
                <li> • Rasa nyeri kalau ada hanya sedikit sekali, sering tak perlu anestesi</li>
                <li> • Lamanya perawatan pendek atau tak perlu dirawat</li>
                <li> • Pada residif dapat diulang lagi tanpa kesukaran</li>
                <li> • Dapat digunakan pada semua usia</li>
            </ul>
            Tarif Mulai dari Rp. 2.440.000,-
           <h2 className=" font-bold mt-2 ">Tarif Dapat Berubah Sewaktu-waktu</h2>
            </div>
        </div>
        </div>
    </section>

    )
}

export default Eswl


