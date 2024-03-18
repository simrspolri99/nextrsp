import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const Unggulan = () => {
    return (
        <div className="text-center">
        <h1 className="text-3xl font-bold mt-8">BERITA TERKINI</h1>
        <div className="flex overflow-x-scroll p-4 sm:p-8">
            {/* Repeat the same structure for additional cards */}

            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            {/* ... Card content */}
            <figure>
                <Image src="/berita12.jpeg" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">MENINGKATKAN KAPASITAS KEDOKTERAN FORENSIK DAN VISUM: RS BHAYANGKARA TK. I PUSDOKKES POLRI GELAR LATIHAN KERJA</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita12">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            {/* ... Card content */}
            <figure>
                <Image src="/hasilpenelitian1.jpeg" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">HASIL SURVEY KEPUASAN PELANGGAN INTERNAL DAN EKSTERNAL RS BHAYANGKARA Tk. I PUSDOKKES POLRI</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita11">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            {/* ... Card content */}
            <figure>
                <Image src="/berita10.jpeg" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">RUMAH SAKIT BHAYANGKARA TK.I PUSDOKKES POLRI RESMIKAN RUANG OPERASI MODULAR OPERATING THEATRE (MOT)</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita10">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            {/* ... Card content */}
            <figure>
                <Image src="/tugasfebruari.jpeg" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">MENGABADIKAN DEDIKASI: ACARA PELEPASAN PURNABHAKTI PARA PERSONIL RUMAH SAKIT BHAYANGKARA TK.I PUSDOKKES POLRI</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita9">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>


            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            {/* ... Card content */}
            <figure>
                <Image src="/enterpreneur.jpeg" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">SOSIALISASI PELUANG USAHA MENUJU PRIBADI TANGGUH SEBAGAI ENTREPRENEUR DI RUMAH SAKIT BHAYANGKARA TK.I PUSDOKKES POLRI</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita8">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            {/* ... Card content */}
            <figure>
                <Image src="/studitiru.jpeg" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">RUMAH SAKIT BHAYANGKARA TK.I PUSDOKKES POLRI MENERIMA STUDI TIRU DARI RUMAH SAKIT UMUM PENGAYOMAN CIPINANG</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita7">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            {/* ... Card content */}
            <figure>
                <Image src="/isra.jpeg" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">HIKMAH ISRA MIRAJ MENANAMKAN MORAL DALAM MEWUJUDKAN POLRI PRESISI SIAP MENGAWAL PEMILU DAMAI</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita6">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>
            
            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            {/* ... Card content */}
            <figure>
                <Image src="/natal2023.jpeg" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">IBADAH DAN PERAYAAN NATAL PUSDOKKES POLRI & RS POLRI 2023</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita5">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>
          
          
            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            <figure>
                <Image src="/konf.png" width="1368" height="768" alt="pertama" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold text-left">KONFERENSI PERS DALAM RANGKA PENANGANAN KORBAN KABEL OPTIK DI JAKARTA SELATAN</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita1">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            {/* ... Card content */}
            <figure>
                <Image src="/maul.png" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">MAULID NABI MUHAMMAD SAW 1445 H / 2023MAULID NABI MUHAMMAD SAW 1445 H / 2023</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita2">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            {/* ... Card content */}
            <figure>
                <Image src="/kerj.png" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">PENANDATANGANAN PERJANJIAN KERJASAMA DI UNIVERSITAS PERTAHANAN RI</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita3">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl flex-none w-80 mr-4">
            {/* ... Card content */}
            <figure>
                <Image src="/hut.png" width="1368" height="768" alt="pertama" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">HUT Ke - 57 Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri</h2>
                <div className="card-actions justify-end mt-4">
                <Link href="/berita4">
                <button className="btn bg-blue-900 text-white">BACA</button>
                </Link>
                </div>
            </div>
            </div>

          

            </div>
        </div>
    );
};

export default Unggulan;
