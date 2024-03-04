import React from 'react'
import Image from 'next/image'

const Fisioterapi = () => {
    return (
    <section>   
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full justify-center">
            <Image src="/fisioterapi1.jpeg" alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full justify-center">
            <Image src="/fisioterapi2.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full justify-center">
            <Image src="/fisioterapi3.jpeg"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full justify-center">
            <Image src="/IMG_1017.png"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide5" className="carousel-item relative w-full justify-center">
            <Image src="/IMG_1019.png"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full justify-center">
            <Image src="/IMG_1014.png"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>

        </div>

    <div className="text-center">
        <h1 className="text-4xl font-bold mt-20 mb-6">Fisioterapi</h1>
        </div>
        <div className='flex flex-wrap justify-center'>
        <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
            <div className="card-body flex flex-col justify-between">
            
            <h2 className="card-title">Apa Itu Fisioterapi?</h2>
            <p>Tujuan Fisioterapi mengembalikan fungsi tubuh dan gerakan tubuh setelah mengalami cedera atau terserang penyakit. 
                Jika seseorang mengalami cedera atau penyakit permanen, fisioterapi bisa dilakukan untuk mengurangi dampaknya.
            </p>
            <h2 className="card-title">Apa Saja Manfaat Fisioterapi?</h2>
            <li>Pemulihan Pasca Cedera atau Operasi: Fisioterapi membantu individu pulih setelah cedera fisik atau operasi. Ini dapat mencakup pemulihan pascaoperasi, rehabilitasi cedera olahraga, atau pemulihan setelah kecelakaan.</li>
            <li>Peningkatan Fungsi Gerak: Melalui serangkaian latihan dan teknik, fisioterapi bertujuan untuk meningkatkan mobilitas, kekuatan otot, dan fungsi umum tubuh, memungkinkan seseorang untuk bergerak dengan lebih mudah dan efisien.</li>
            </div>
        </div>
        </div>
    </section>

    )
}

export default Fisioterapi
