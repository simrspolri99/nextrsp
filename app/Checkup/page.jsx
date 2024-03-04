import React from 'react'
import Image from 'next/image'

const Checkup = () => {
    return (
    <section>   
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full justify-center">
            <Image src="/mcu1.jpeg" alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full justify-center">
        <Image src="/mcu2.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full justify-center">
        <Image src="/mcu3.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full justify-center">
        <Image src="/mcu4.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide5" className="carousel-item relative w-full justify-center">
        <Image src="/mcu5.jpeg"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide6" className="carousel-item relative w-full justify-center">
        <Image src="/IMG_1059.png"alt="foto" width="1368" height="768"></Image>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide5" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>
    <div className="text-center">
        <h1 className="text-4xl font-bold mt-20 mb-6">MEDICAL CHECK UP</h1>
        </div>
        <div className='flex flex-wrap justify-center'>
        <div className="card m-4 w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
            <div className="card-body flex flex-col justify-between">
            <h2 className="card-title">Apa Itu MCU?</h2>
            <p>Meupakan Pemeriksaan menyeluruh untuk mengetahui kondisi kesehatan tubuh dan juga mendeteksi adanya ganguan medis sedak dini</p>
            <h2 className="card-title">Manfaat MCU</h2>
            <ul>
                <li> • Medeteksi Penyakit Sejak dini</li>
                <li> • Memperbarui data Klinis</li>
                <li> • Mengetahui program kesehatan yang baik untuk Individeu</li>
                <li> • Mecegah penyakit Berlanjut</li>
                <li> • Mengetahui Status Kesehatan Calon (AKPOL, Bintara, Dll)</li>
            </ul>
            <h2 className="card-title">Persiapan MCU</h2>
            <ul>
                <li> • Istirahat yang Cukup</li>
                <li> • Puasa 8 - 10 Jam</li>
                <li> • Banyak Minum Air Putih</li>
                <li> • Tidak Merokok</li>
                <li> • Tidak Megkonsumsi Alkohol</li>
            </ul>
            <h2 className="card-title">Penyakit Yang Bisa Dicegah</h2>
            <ul>
                <li> • Hipertensi</li>
                <li> • Penyakit Jantung</li>
                <li> • Stroke</li>
                <li> • Diabetes Melitus</li>
                <li> • Sindom Metabolik</li>
                <li> • Penyakit Kesehatan Jiwa</li>
            </ul>
            <div className="card-actions justify-end"></div>
            </div>
            <div className="flex flex-wrap mb-4 justify-center">
            <div className="card m-4 w-80 bg-orange-300 shadow-xl">
            <div className="card-body">
            <div className="text-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mt-4 mb-6 text-black">PAKET 1</h1>
                </div>

        <div className="text-left text-black">
            <ul>
            <li>• Pemeriksaan Fisik </li>
            <li>• Rhontgen Thorax</li>
            <li>• USG Abdomen, Spirometri</li>
            <li>• Pemeriksaan Mata dan THT</li>
            <li>• Pemeriksaan Gigi</li>
            <li>• EKG, Treadmill Test</li>
            <li>• Darah Lengkap, Urin Lengkap</li>
            <li>• Bilirubin Total Direk Indirect</li>
            <li>• Protein Total, Albumin</li>
            <li>• Globulin, SGOT, SGPT, Ureum, Creatinin, Asam Urat, Kolesterol Total, Trigliserida, HDL dan LDL, GDP, GD2PP dan Swab Antigen</li>
            </ul>
            </div>
            <h2 className="text-1xl font-bold mt-4 mb-0 text-black"
              > Harga Mulai
               </h2>
            <h3 className="text-2xl font-bold  text-black"
              > Tarif : Rp. 1.310.500,-
               </h3>
                <div className="card-actions justify-end">
                </div>
                </div>
            </div>
            </div>

            <div className="flex flex-wrap justify-center">
            <div className="card m-4 w-80 bg-orange-300 shadow-xl">
            <div className="card-body">
            <div className="text-center">
                <div className="text-center">
                <h1 className="text-2xl font-bold mt-4 mb-6 text-black">PAKET 2</h1>
        </div>

        <div className="text-left text-black">
            <ul>
            <li>• Pemeriksaan Fisik </li>
            <li>• Rhontgen Thorax</li>
            <li>• Pemeriksaan Mata dan THT</li>
            <li>• Pemeriksaan Gigi</li>
            <li>• EKG, Treadmill Test</li>
            <li>• Darah Lengkap, Urin Lengkap</li>
            <li>• SGOT, SGPT, Ureum, Creatinin, Asam Urat, Kolesterol Total, Trigliserida, GDP, GD2PP dan Swab Antigen</li>
            </ul>
            </div>
            <h2 className="text-1xl font-bold mt-20 mb-0 text-black"
              > Harga Mulai
               </h2>
            <h3 className="text-2xl font-bold  text-black"
              > Tarif : Rp. 979.500,-
               </h3>
                <div className="card-actions justify-end">
                </div>
                </div>
            </div>
            </div>
            
            <div className="flex flex-wrap justify-center">
            <div className="card m-4 w-80 bg-orange-300 shadow-xl">
            <div className="card-body">
            <div className="text-center">
                <div className="text-center">
                <h1 className="text-2xl font-bold mt-4 mb-6 text-black">PAKET 3</h1>
        </div>

        <div className="text-left text-black">
            <ul>
            <li>• Pemeriksaan Fisik </li>
            <li>• Rhontgen Thorax</li>
            <li>• EKG</li>
            <li>• Darah Lengkap, Urin Lengkap</li>
            <li>• SGOT, SGPT, Ureum, Creatinin, Asam Urat, Kolesterol Total, Trigliserida, GDP, GD2PP dan Swab Antigen</li>
            </ul>
            </div>
            <h2 className="text-1xl font-bold mt-32 mb-0 text-black"
              > Harga Mulai
               </h2>
            <h3 className="text-2xl font-bold  text-black"
              > Tarif : Rp. 594.500,-
               </h3>
                <div className="card-actions justify-end">
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="flex flex-wrap justify-center">
            <div className="card m-4 w-80 bg-orange-300 shadow-xl">
            <div className="card-body">
            <div className="text-center">
                <div className="text-center">
                <h1 className="text-2xl font-bold mt-4 mb-6 text-black">PAKET PEMERIKSAAN AKPOL/BINTARA</h1>
        </div>

        <div className="text-left text-black">
            <ul>
            <li>• AKPOL KEDINASAN + KESWA </li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 1.037.000,-</h1>
            <li>• AKPOL KEDINASAN NON KESWA</li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 862.000,-</h1>
            <li>• BINTARA + KESWA</li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 802.000,-</h1>
            <li>• BINTARA NON KESWA</li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 627.000,-</h1>
            <h1 className="text-center  mt-4 mb-0 text-black">  Biaya paket pemeriksaan dapat berubah sewaktu-waktu. Semua pasien yang melakukan pemeriksaan wajib melakukan swab antigen. Biaya swab antigen diluar paket pemeriksaan.</h1>
            </ul>
            </div>
           
               
                </div>
            </div>
            </div>
            <div className="flex flex-wrap justify-center">
            <div className="card m-4 w-80 bg-orange-300 shadow-xl">
            <div className="card-body">
            <div className="text-center">
                <div className="text-center">
                <h1 className="text-2xl font-bold mt-4 mb-6 text-black">PAKET PEMERIKSAAN NARKOBA</h1>
        </div>

        <div className="text-left text-black">
            <ul>
            <li>• NARKOBA 6 PARAMETER + SKD </li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 400.000,-</h1>
            <li>• NARKOBA 6 PARAMETER NON SKD</li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 380.000,-</h1>
            <li>• NARKOBA 3 PARAMETER + SKD</li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 250.000,-</h1>
            <li>• NARKOBA 3 PARAMETER NON SKD</li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 250.000,-</h1>
            <h1 className="text-center font-bold mt-4 mb-6 text-black">  PAKET PEMERIKSAAN MMPI, NARKOBA 6 P.SKD</h1>
            <li>• PEMERIKSAAN MMPI, NARKOBA 6 P.SKD</li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 719.000,-</h1>
            </ul>
            </div>
            </div>
            </div>
            </div>
            <div className="flex flex-wrap justify-center">
            <div className="card m-4 w-80 bg-orange-300 shadow-xl">
            <div className="card-body">
            <div className="text-center">
                <div className="text-center">
                <h1 className="text-2xl font-bold mt-4 mb-6 text-black">PEMERIKSAAN TES KEHAMILAN</h1>
        </div>

        <div className="text-left text-black">
            <ul>
            <li>• SURAT BEBAS HAMIL </li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 140.000,-</h1>
            <h1 className="text-2xl text-center font-bold mt-4 mb-6 text-black"> PEMERIKSAAN ADOPSI </h1>
            <li>• ADOPSI UNTUK CALON AYAH </li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 879.000,-</h1>
            <li>• ADOPSI UNTUK CALON IBU </li>
            <h1 className="text-center font-bold mt-4 mb-6 text-black"> Tarif : Rp. 1.104.000,-</h1>
            </ul>
            </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="text-center">
        <h1 className="text-4xl font-bold mt-12 mb-12">Tarif Dapat Berubah Sewaktu-Waktu</h1>
        </div>
        </div>
        
        </div>
        
    </section>

    )
}

export default Checkup