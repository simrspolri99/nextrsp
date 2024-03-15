import React from 'react'
import Image from 'next/image'

const berita11 = () => {
  return (
    <div className="">
      <div className='flex flex-wrap justify-center mt-24'>
        <Image src="/hasilpenelitian1.jpeg" width="1368" height="768" alt="foto1" ></Image>
        <div className="card m-4 w-full bg-blue-900 text-white shadow-xl flex flex-col">
            <div className="card-body flex flex-col justify-between">
            <h2 className="card-title">HASIL SURVEY KEPUASAN PELANGGAN INTERNAL DAN EKSTERNAL RS BHAYANGKARA Tk. I PUSDOKKES POLRI</h2>
            <p>HUMAS RSPOLRI</p>
            <h2 text-className="card-title">HASIL SURVEY KEPUASAN PELANGGAN INTERNAL DAN EKSTERNAL RS BHAYANGKARA Tk. I PUSDOKKES POLRI</h2>
            <p>
            Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri Mengadakan Survey internal dan eksternal
            mengenai kepuasan pelanggan yang dilakukan oleh pihak ke tiga PT. MITRA AMELIORASI SINERGI
            yang menjadi latarbelakang dilakukan survey adalah Salah satu faktor utama untuk mewujudkan instansi yang baik (good governance)
            dengan upaya guna meningkatkan kualitas pelayanan publik, sebagaimana diamanatkan 
            dalam Undang-Undang Republik Indonesia Nomor 25 Tahun 2000 tentang Program 
            Pembangunan Nasional (PROPENAS), perlu disusun Indeks Kepuasan Masyarakat (IKM) 
            sebagai tolak ukur untuk menilai tingkat kualitas pelayanan. Undang-Undang Nomor 25 Tahun 
            2009 tentang Pelayanan Publik juga mengamanatkan bahwa penyelenggara pelayanan publik 
            berkewajiban melakukan penilaian kinerja penyelenggaraan pelayanan publik secara berkala. 
            Penyelenggara Pelayanan Publik khususnya Rumah Sakit dalam hal ini yang menurut standar 
            akreditasi tahun 2022 wajib memberikan kualitas pelayanan yang berdasarkan pada 
            keselamatan pasien, maka penyelenggara pelayanan publik wajib melakukan Survey Kepuasan 
            Masyarakat secara berkala minimal 1 kali setahun. Survey dilakukan untuk memperoleh Indeks 
            Kepuasan Masyarakat (IKM). IKM adalah data dan informasi tentang tingkat kepuasan 
            pelanggan yang diperoleh dari hasil pengukuran secara kualitatif dan kuantitatif atas pendapat 
            pelanggan yang memperoleh pelayanan dengan membandingkan antara harapan dan 
            kebutuhannya.
            </p>
            <Image src="/hasilpenelitian.jpeg" width="1368" height="768" alt="foto1" ></Image>
            <div className="card-actions justify-end"></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default berita11