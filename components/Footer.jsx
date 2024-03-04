import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaYoutube, FaEnvelope, FaPhoneVolume } from 'react-icons/fa' // Gunakan ikon dari pustaka ikon


const Footer = () => {
    return (
    <div className="footer p-5 py-10 bg-orange-300 text-base-content ">
        <div className="items-col inline-block">
        <Image src="/LOGO_2.png" width="400" height="400" alt="logo"/>
        <h1 className="justify-end font-black text-3xl ml-8">PRESISI & PARIPURNA</h1>
            <div className="social-media-icons mt-10 ml-8">
            <a href="https://www.instagram.com/rumahsakitpolrikramatjati/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FaInstagram size={40} /> {/* Atur ukuran ikon di sini */}
            <span className="ml-2 font-bold text-lg">rumahsakitpolrikramatjati</span>
            </a>
            <a href="https://www.youtube.com/@RumahSakitPolriKramatJati/videos" target="_blank" rel="noopener noreferrer" className="flex items-center mt-4">
            <FaYoutube size={40} /> {/* Atur ukuran ikon di sini */}
            <span className="ml-2 font-bold text-lg">rumahsakitpolrikramatjati</span>
            </a>
            <a href="mailto:rumahsakitpolrikramatjati@gmail.com" className="flex items-center mt-4">
            <FaEnvelope size={40} /> {/* Atur ukuran ikon di sini */}
            <span className="ml-2 font-bold text-lg">rumahsakitpolrikramatjati@gmail.com</span>
            </a>
            <a href="tel:0218093288" className="flex items-center mt-4">
            <FaPhoneVolume size={40} /> {/* Atur ukuran ikon di sini */}
            <span className="ml-2 font-bold text-lg">Call Center</span>
            </a>
            </div>
        </div>
    <nav>
        <header className="footer-title font-black">FASILITAS UNGGULAN</header> 
        <a className="link link-hover" href="/Checkup">POLI EDELWEISS </a>
        <a className="link link-hover" href="/Hiperbarik">INSTALASI GAWAT DARURAT</a>
        <a className="link link-hover" href="/Radiologi">RADIOLOGI</a>
        <a className="link link-hover" href="/Gawatdarurat">MEDICAL CHECK UP</a>
        <a className="link link-hover" href="/Dna">DNA</a>
        <a className="link link-hover" href="/Mot">MODULAR OPERATION THEATER</a>
        <a className="link link-hover" href="/Hiperbarik">HIPERBARIK</a>
        <a className="link link-hover" href="/Hemodialisa">HEMODIALISA</a>
        <a className="link link-hover"href="/Fisioterapi">FISIOTERAPI</a>
        <a className="link link-hover"href="/Eswl">ESWL</a>
        <a className="link link-hover"href="/Dna">DNA</a>
        <a className="link link-hover"href="/kemoterapi">KEMOTERAPI</a>
        <a className="link link-hover"href="/Kardiovaskuler">INSTALASI INTERVENSI KARDIOVASKULER</a>
    </nav> 
    <nav>
        <header className="footer-title font-black">DIKLIT</header> 
        <a className="link link-hover" href="/Pendidikan">PENDIDIKAN</a>
        <a className="link link-hover" href="/Penelitian">PENELITIAN</a>
        <a className="link link-hover" href="/maintenance">PUBLIKASI</a>
        <a className="link link-hover" href="/Pelatihan">PELATIHAN</a>
    </nav> 
    <nav>
        <header className="footer-title font-black">TERKINI</header> 
        <a className="link link-hover" href="/Artikel">ARTIKEL</a>
        <a className="link link-hover" href="/Visi">Visi</a>
        <a className="link link-hover" href="/Video">VIDEO</a>
        <a className="link link-hover" href="/maintenance">EDUKASI VISUAL</a>
    </nav>
    
        <div className="footer-content ">
            {/* Informasi lokasi */}
            <div className="location-info">
            <h3 className="font-extrabold">Lokasi Kami</h3>
            <p>Jalan RS. Polri No .5</p>
            <p>Provinsi DKI JAKARTA, Jakarta Timur, Kramat Jati, 13510</p>
            </div>
            {/* Peta menggunakan Google Maps */}
            <div className="map">
            <iframe
                width="370"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.952111701266!2d106.86821347441077!3d-6.270028461379188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2f6df8347e3%3A0x1556154c3bd854b1!2sRS%20Umum%20Bhayangkara%20Tk.%20I%20R.%20Said%20Sukanto!5e0!3m2!1sid!2sid!4v1703662240997!5m2!1sid!2sid" 
                allowFullScreen
            />
            </div> 
        </div>
    </div>
    )
}

export default Footer
