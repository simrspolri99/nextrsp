import React from 'react';
import Link from 'next/link'
const VideoLayout = () => {
  return (
    <div className="bg-orange-300 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl text-white p-2 rounded-full font-bold">VIDEO</h1>
      <div className="flex flex-wrap justify-center">
      

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
            <div className="font-bold text-xl mb-2 text-center">MEMPERINGATI HARI ISRA MIRAJ NABI MUHAMMAD SAW 1445 H / 2024
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
            <div className="font-bold text-xl mb-2 text-center">NGOPI RUSARI Eps. 20 | NGOPI RUSARI Eps. 20 | TUNTASKAN BATU GINJAL DENGAN ESWL</div>
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

    

       

       
      
          
       
        {/* Add more video cards as needed */}
      </div>
      <div className="card-actions justify-end mt-4">
              <Link href="/Video">
                <button className="btn bg-blue-900 px-6 text-white">VIDEO SELENGKAPNYA</button>
              </Link>
            </div>
    </div>
    
  );
};

export default VideoLayout;
