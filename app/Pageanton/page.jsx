import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>   
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full justify-center">
        <Image src="/Ranap_Anton41.png" alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide11" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/Ranap_Anton42.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/Ranap_Anton43.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full justify-center">
        <Image src="/Ranap_Anton44.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide5" className="carousel-item relative w-full justify-center">
        <Image src="/Ranap_Anton45.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide6" className="carousel-item relative w-full justify-center">
        <Image src="/Ranap_Anton47.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide5" className="btn btn-circle">❮</a> 
        <a href="#slide7" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide7" className="carousel-item relative w-full justify-center">
        <Image src="/Ranap_Anton48.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide6" className="btn btn-circle">❮</a> 
        <a href="#slide8" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide8" className="carousel-item relative w-full justify-center">
        <Image src="/Ranap_Anton49.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide7" className="btn btn-circle">❮</a> 
        <a href="#slide9" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide9" className="carousel-item relative w-full justify-center">
        <Image src="/Ranap_Anton410.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide8" className="btn btn-circle">❮</a> 
        <a href="#slide10" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide10" className="carousel-item relative w-full justify-center">
        <Image src="/Ranap_Anton412.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide9" className="btn btn-circle">❮</a> 
        <a href="#slide11" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide11" className="carousel-item relative w-full justify-center">
        <Image src="/Ranap_Anton411.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide10" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>

<div className="text-center">
    <h1 className="text-4xl font-bold mt-20 mb-6">Anton 4 </h1>
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
        <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title">Anton Soedjarwo</h2>
       
        </div>
    </div>
    </div>
</section>
  )
}

export default page
