import React from 'react'
import Image from 'next/image'

const Hiperbarik = () => {
    return (
    <section>   
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full justify-center">
            <Image src="/hiperbarik1.jpeg" alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full justify-center">
            <Image src="/DSC07095.png"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full justify-center">
            <Image src="/hiperbarik2.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full justify-center">
            <Image src="/hiperbarik4.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full justify-center">
            <Image src="/hiperbarik3.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full justify-center">
            <Image src="/DSC07090.png"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>

        </div>

    <div className="text-center">
        <h1 className="text-4xl font-bold mt-20 mb-6">HIPERBARIK</h1>
        </div>
        <div className='flex flex-wrap justify-center'>
        <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
            <div className="card-body flex flex-col justify-between">
            
            <h2 className="card-title">Apa Itu Hiperbarik?</h2>
            <p>Terapi Oksigen Hiperbarik Adalah pengobatan yang dlakukan 
                dengan cara memberikan oksigen murni 100% dalam ruangan khusus bertekanan udara tinggi untuk dihirup pasien
                ruangan hiperbarik menyebabkan paru-paru pasien menyerap oksigen lebih banyak dari biasanya
            </p>
            <h2 className="card-title">Apa Saja Manfaat dari Hiperbarik?</h2>
            <li>Perbaikan Paska Radioterapi: Terapi hiperbarik dapat membantu memperbaiki jaringan yang rusak akibat radioterapi pada beberapa kondisi kanker.</li>
            <li>Pemulihan Luka: Terapi hiperbarik dapat meningkatkan penyembuhan luka dengan meningkatkan suplai oksigen ke jaringan yang rusak. Ini dapat membantu pada luka bakar, luka operasi, dan luka lainnya yang sulit sembuh.</li>
            </div>
        </div>
        </div>
    </section>

    )
}

export default Hiperbarik


