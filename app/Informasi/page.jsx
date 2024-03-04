import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <section className="container bg-center">
        <h1 className=" font-black text-4xl pl-14 mt-24">Pusat Informasi Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri</h1>
        <p className="pl-14 mt-6">Pusat Informasi Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri Adalah Tempat Pelyanan Informasi
        dalam mencari Berita atau Informasi Pelayanan seperti Pendaftaran Online, Pendaftaran Onsite, Pendaftaran Poli Presisi Edelweiss 
        dan beragam Informasi Seputar Fasilitas Penunjang yang ada dirumah sakit polri Pusat Informasi juga memiliki data ter-Update 
        Jadwal Dokter yang praktik di Rumah Sakit Bhayang kara Tk. I Pusdokkes Polri. Pusat Informasi juga Menangani Laporan Komplain Pasien
        dan Permintaan data Akademis Untuk Mendukung Penelitian dan Pendidikan di Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri
        </p>
        <div className="pl-14 mt-3">
        <Link href="https://wa.me/085882423662">
            <button className="btn bg-blue-900 text-white">PUSAT INFORMASI RUMAH SAKIT BHAYANGKARA TK. I PUSDOKKES POLRI</button>
        </Link>
        </div>
        <div className="pl-14">
            <h1 className=" font-black text-4xl mt-6">Survey Kepuasan Pasien dan Laporan Komplain</h1>
            <div className="flex flex-wrap mt-6">
            <div className="card w-96 m-4 bg-blue-900 text-white">
            <div className="card-body">
                <h2 className="card-title text-xl text-center font-bold mb-4">Survei Kepuasan Pasien</h2>
                <p>Format Pelaporan</p>
                <li>Nama Responden</li>
                <li>Nomor Rekam Medis</li>
                <li>Isi Survei</li>
                <div className="card-actions justify-end">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdtKOH5KORHCGYLaZe864DRcLiijFAFTBQAWgz0UYu5_e3hSA/viewform?usp=sf_link">
                    <button className="btn">Survey</button>
                </Link>
                </div>
            </div>
            </div>
            <div className="card w-96 m-4 bg-blue-900 text-white">
            <div className="card-body">
                <h2 className="card-title text-xl text-center font-bold mb-4">Laporan Komplain Pasien</h2>
                <p>Format Pelaporan</p>
                <li>Nama Responden</li>
                <li>Nomor Rekam Medis</li>
                <li>Isi Laporan</li>
                <div className="card-actions justify-end">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdjRjaJZsa98mxg7gUaGNlxkIi6JKYXCf9QsJtt6uI1IV7FlQ/viewform?usp=sf_link">
                    <button className="btn">Laporkan</button>
                </Link>
                </div>
            </div>
            </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default page ;
