import React from 'react';
import Link from 'next/link'
const Video = () => {
  return (
    <div>
      <h1 className="text-3xl text-black p-2 mt-32 text-center rounded-full font-bold">VIDEO</h1>
      <div className="flex flex-wrap justify-center">

    

      <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
<div className="relative">
  <iframe
    className="w-full h-48 object-cover rounded-t"
    src="https://www.youtube.com/embed/KFb9Wg8sWw8?si=VbYlwkm7wEUn5UrI"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
<div className="px-6 py-4">
  <div className="font-bold text-xl mb-2 text-center">ALUR PENDAFTARAN ONLINE RAWAT JALAN</div>
</div>
</div>

<div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <iframe
              className="w-full h-48 object-cover rounded-t"
              src="https://www.youtube.com/embed/7uDtKpHPs7A" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">NGOPI RUSARI Eps. 24 | MENGENAL DSA (DIGITAL SUBTRACTION ANGIOGRAPHY)
</div>
          </div>
        </div>

      <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <iframe
              className="w-full h-48 object-cover rounded-t"
              src="https://www.youtube.com/embed/Y1dw64n4C6w" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">NGOPI RUSARI Eps. 23 | ESTETIKA KECANTIKAN DAN AGING
</div>
          </div>
        </div>


      <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <iframe
              className="w-full h-48 object-cover rounded-t"
              src="https://www.youtube.com/embed/_Endy7UwOwk" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">MEMPERINGATI HARI ISRA MIRAJ NABI MUHAMMAD SAW 1445 H / 2024
</div>
          </div>
        </div>


      <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <iframe
              className="w-full h-48 object-cover rounded-t"
              src="https://www.youtube.com/embed/ccz3WJzDLOU" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">NGOPI RUSARI Eps. 22 | THE SENIOR POLICE TO TALK #3  
</div>
          </div>
        </div>

      <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <iframe
              className="w-full h-48 object-cover rounded-t"
              src="https://www.youtube.com/embed/AHaLtpmt-hs" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">NGOPI RUSARI Eps. 21 | TOUR OF DUTY & TOUR OF AREA 
</div>
          </div>
        </div>
      
        


   

       
      </div>
        <div className="join mx-auto grid w-56 justify-center grid-cols-2">
        <Link href="/Video3">
        <button className="join-item btn btn-outline">Previous page</button>  </Link>
       
        <Link href="/Video2">  
        <button className="join-item btn btn-outline">Next</button> </Link>
        </div>

    </div>
  );
}

export default Video;
