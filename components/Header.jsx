
import React from 'react'
import Link from 'next/link/'
import Image from 'next/image'

const Header = () => {
    return (
    <div className="navbar bg-white bg-opacity-90 backdrop-blur-md fixed top-0 w-full z-50 " alt="mobile">
    <div className="navbar-start">
    <div className="dropdown">
        <div tabIndex={0} role="button" className="btn bg-transparent btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-blue-950 rounded-box w-52">
        <li>
        <details>
        <summary>PELAYANAN</summary>
        <ul className="p-2" >
                <li><a href="/Dokter">Cari Dokter</a></li>
                <li><a href="/Admisi">Admisi</a></li>
                <li><a href="/Alur">Alur Pelayanan</a></li>
                <li><a href="/Poliklinik">Poliklinik</a></li>
                <li><a href="/Ranap">Rawat Inap</a></li>
                <li><a href="/Informasi">Pusat Informasi</a></li>
            </ul>
        </details>
        </li>
        <li>
            <details>
                <summary>FASILITAS</summary>
                <ul className="p-2" >
                    <li><a href="/Edelweiss">Poli Edelweiss</a></li>
                    <li><a href="/Gawatdarurat">Instalasi Gawat Darurat</a></li>
                    <li><a href="/Radiologi">Radiologi</a></li>
                    <li><a href="/Checkup">Medical Check Up</a></li>
                    <li><a href="/Mot">Modular Operation Theater</a></li>
                    <li><a href="/Hiperbarik">Hiperbarik</a></li>
                    <li><a href="/Hemodialisa">Hemodialisa</a></li>
                    <li><a href="/Fisioterapi">Fisioterapi</a></li>
                    <li><a href="/Eswl">ESWL</a></li>
                    <li><a href="/Dna">DNA</a></li>
                    <li><a href="/kemoterapi">Kemoterapi</a></li>
                    <li><a href="/Kardiovaskuler">Instalasi Intervensi Kardiovaskuler</a></li> 
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary>DIKLIT</summary>
                <ul className="p-2" >
                    <li><a href="/Pendidikan">Pendidikan</a></li>
                    <li><a href="/Penelitian">Penelitian</a></li>
                    <li><a href="/maintenance">Publikasi</a></li>
                    <li><a href="/Pelatihan">Pelatihan</a></li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary>BERITA</summary>
                <ul className="p-2" >
                    <li><a href="/Artikel">Artikel</a></li>
                    <li><a href="/Video">Video</a></li>
                    <li><a href="/maintenance">Edukasi Kesehatan</a></li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary>RS POLRI</summary>
                <ul className="p-2" >
                    <li><a href="/Visi">Visi & Misi</a></li>
                    <li><a href="/Struktur">Struktur Organisasi</a></li>
                    <li><a href="/Prestasi">Prestasi</a></li>
                </ul>
            </details>
        </li>
        </ul>
    </div>
    <Link href="/">
    <Image src="/LOGO_2.png" width="500" height="500" alt="logonav" className="ml-10 w-60"/>
    </Link>
    </div>
    <div className="navbar-center hidden lg:flex" alt="dekstop">
    <ul className="menu menu-horizontal">
            <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="font-bold py-5 px-7 bg-white rounded-box text-black">PELAYANAN</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-950 text-white hover rounded-box w-52">
                    <li><a href="/Dokter">Cari Dokter</a></li>
                    <li><a href="/Admisi">Admisi</a></li>
                    <li><a href="/Alur">Alur Pelayanan</a></li>
                    <li><a href="/Poliklinik">Poliklinik</a></li>
                    <li><a href="/Ranap">Rawat Inap</a></li>
                    <li><a href="/Informasi">Pusat Informasi</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover mx-2">
            <div tabIndex={0} role="button" className="font-bold py-5 px-7 bg-white rounded-box text-black">FASILITAS</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-950 text-white hover rounded-box w-52">
                    <li><a href="/Edelweiss">Poli Edelweiss</a></li>
                    <li><a href="/Gawatdarurat">Instalasi Gawat Darurat</a></li>
                    <li><a href="/Radiologi">Radiologi</a></li>
                    <li><a href="/Checkup">Medical Check Up</a></li>
                    <li><a href="/Mot">Modular Operation Theater</a></li>
                    <li><a href="/Hiperbarik">Hiperbarik</a></li>
                    <li><a href="/Hemodialisa">Hemodialisa</a></li>
                    <li><a href="/Fisioterapi">Fisioterapi</a></li>
                    <li><a href="/Eswl">ESWL</a></li>
                    <li><a href="/Dna">DNA</a></li>
                    <li><a href="/kemoterapi">Kemoterapi</a></li> 
                    <li><a href="/Kardiovaskuler">Instalasi Intervensi Kardiovaskuler</a></li> 
                </ul>
            </div>
            <div className="dropdown dropdown-hover mx-2">
            <div tabIndex={0} role="button" className="font-bold py-5 px-7 bg-white rounded-box text-black">DIKLIT</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-950 text-white hover rounded-box w-52">
                    <li><a href="/Pendidikan">Pendidikan</a></li>
                    <li><a href="/Penelitian">Penelitian</a></li>
                    <li><a href="/maintenance">Publikasi</a></li>
                    <li><a href="/Pelatihan">Pelatihan</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover mx-2">
            <div tabIndex={0} role="button" className="font-bold py-5 px-7 bg-white rounded-box text-black">BERITA</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-950 text-white hover rounded-box w-52">
                    <li><a href="/Artikel">Artikel</a></li>
                    <li><a href="/Video">Video</a></li>
                    <li><a href="/maintenance">Edukasi Visual</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover mx-2">
            <div tabIndex={0} role="button" className="font-bold py-5 px-7 bg-white rounded-box text-black">RS POLRI</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-950 text-white hover rounded-box w-52">
                    <li><a href="/Visi">Visi & Misi</a></li>
                    <li><a href="/Struktur">Struktur Organisasi</a></li>
                    <li><a href="/Prestasi">Prestasi</a></li>
                </ul>
            </div>
    </ul>
    </div>
   
    <div className="navbar-end mr-7">
        <Link href="https://t.me/esurveypolri_bot">
        <button className="btn bg-blue-900 px-6 text-white" >E-Survey POLRI</button>
        </Link>
    </div>
    
    </div>
    )
}

export default Header
