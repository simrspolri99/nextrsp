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
    src="https://www.youtube.com/embed/gx31wzNqq1Y?si=cnYHnyv39623ok8y"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
<div className="px-6 py-4">
  <div className="font-bold text-xl mb-2 text-center">OPERASI KATARAK GRATIS DENGAN PHACOEMULSIFIKASI</div>
</div>
</div>

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


</div>
        <div className="join mx-auto grid w-56 justify-center grid-cols-2">
        <Link href="/Video3">
        <button className="join-item btn btn-outline">Previous page</button>  </Link>
       
        <Link href="/Video">      
        <button className="join-item btn btn-outline">Next</button></Link>
        </div>

    </div>
  );
}

export default Video;
