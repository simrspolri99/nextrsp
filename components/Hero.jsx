import React from 'react'
import Image from 'next/image'


const Hero = () => {
    return (
    <div className="hero bg-base-200 px-10 py-12">
    <div className="hero-content flex-col lg:flex-row">
    <Image src="/dr-Hariyanto-SpPD-Karumkit.png" width="1000" height="1000" className="max-w-sm rounded-lg shadow-2xl" alt="fotoka"/>
    <div>
        <h1 className="text-3xl font-bold">KEPALA RUMAH SAKIT</h1>
        <h2 className= "text-3xl font-bold">BHAYANGKARA TK. I PUSDOKKES POLRI</h2>
        <h4>Assalamualaikum Wr. Wb</h4>
        <p className="py-3">
        Selamat datang di website Resmi Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri
        Salam sejahtera bagi kita semua,
        Pertama-tama, saya ingin menyambut Anda dengan tulus di website resmi Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri. 
        Ini adalah suatu kehormatan dan kebanggaan bagi kami untuk memiliki kesempatan untuk memberikan pelayanan kesehatan yang 
        terbaik bagi anggota Polri dan masyarakat umum.Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri adalah lembaga kesehatan yang 
        memiliki komitmen tinggi dalam memberikan layanan medis berkualitas dan peduli terhadap kebutuhan kesehatan semua pasien. 
        Kami selalu berupaya untuk memberikan pelayanan yang ramah, profesional, dan inovatif, sehingga setiap individu merasa aman 
        dan nyaman dalam merawat dan menyembuhkan diri. Kami juga ingin mendengar masukan dan umpan balik dari Anda untuk terus 
        meningkatkan pelayanan kami. 
        Terima kasih atas kepercayaan Anda dalam memilih Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri sebagai mitra 
        dalam menjaga kesehatan Anda. Kami berkomitmen untuk menjadi mitra yang handal dan terpercaya dalam perawatan kesehatan Anda.
        </p>
        <h4>Wassalamualaikum Wr. Wb.</h4>
        <h4 className="text-1xl font-bold">dr. HARIYANTO, Sp.PD</h4>
        <h4 className="text-1xl font-bold">BRIGADIR JENDERAL POLISI</h4>
        
    </div>
    </div>
    </div>
    )
}

export default Hero
