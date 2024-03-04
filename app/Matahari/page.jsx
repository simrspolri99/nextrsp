import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/matahari4.jpeg" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/matahari1.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/matahari2.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full justify-center">
        <Image src="/matahari3.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6">POLIKLINIK MATAHARI</h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title">Apa itu Poliklinik Matahari?</h2>
       <ul>
       <li>  Poli Pelayanan Pasien HIV (Human Immunodeficiency Virus) adalah unit atau bagian di rumah sakit yang menyediakan layanan kesehatan khusus untuk individu yang hidup dengan HIV. HIV adalah virus yang menyebabkan AIDS (Acquired Immunodeficiency Syndrome), yang dapat menyebabkan penurunan sistem kekebalan tubuh.</li>
       </ul>
       <h2 className="card-title">Apa saja Manfaat Poliklinik Matahari?</h2>
       <li>Perawatan Medis yang Spesifik: Pasien HIV menerima perawatan medis yang spesifik dan disesuaikan dengan kondisi mereka. Ini termasuk pengawasan dan penanganan komplikasi kesehatan yang dapat muncul akibat infeksi HIV.</li>
       <li>Pemantauan Rutin: Poli ini menyediakan pemantauan rutin terhadap kondisi kesehatan pasien, termasuk pemantauan tingkat CD4, viral load, dan parameter lainnya. Hal ini penting untuk memastikan bahwa pengobatan HIV efektif dan untuk mendeteksi perubahan kondisi dengan cepat.</li>
       <li>Edukasi dan Pencegahan: Poli Matahari memberikan edukasi kepada pasien tentang kondisi mereka, cara mengelola penyakit, dan strategi pencegahan penularan kepada orang lain. Ini membantu meningkatkan pemahaman pasien tentang HIV dan mengurangi stigmatisasi terhadap penyakit ini.</li>
        </div>
    </div>
    </div>
</section>
  )
}

export default page
