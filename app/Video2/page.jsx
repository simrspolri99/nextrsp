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

      <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <iframe
              className="w-full h-48 object-cover rounded-t"
              src="https://www.youtube.com/embed/MDb4c5N0ZsA" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">NGOPI RUSARI Eps. 20 | TUNTASKAN BATU GINJAL DENGAN ESWL</div>
          </div>
        </div>

        <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <iframe
              className="w-full h-48 object-cover rounded-t"
              src="https://www.youtube.com/embed/EwuT1-sIFBw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">NGOPI RUSARI Eps. 19 | INSAN DOKPOL PENGABDIAN TAK BERTEPI</div>
          </div>
        </div>

<div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <iframe
              className="w-full h-48 object-cover rounded-t"
              src="https://www.youtube.com/embed/_2ksLJ9ktbU?si=Wd_1I7nBA_50PMhh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">NGOPI RUSARI Eps. 18 | THE SENIOR POLICE TALK PART 2</div>
          </div>
        </div>

      <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <iframe
              className="w-full h-48 object-cover rounded-t"
              src="https://www.youtube.com/embed/lmTAyl9kJSo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">IBADAH DAN PERAYAAN NATAL PUSDOKKES POLRI & RS POLRI 2023</div>
          </div>
        </div>

            <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <iframe
              className="w-full h-48 object-cover rounded-t"
              src="https://www.youtube.com/embed/SE47_DDt9P8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">KONFERENSI PERS DALAM RANGKA PENANGANAN KORBAN KABEL OPTIK DI JAKARTA SELATAN</div>
          </div>
        </div>

    

       
      
      
        


      </div>
        <div className="join mx-auto grid w-56 justify-center grid-cols-2">
        <Link href="/Video">
        <button className="join-item btn btn-outline">Previous page</button>  </Link>
       
        <Link href="/Video3">      
        <button className="join-item btn btn-outline">Next</button></Link>
        </div>

    </div>
  );
}

export default Video;
