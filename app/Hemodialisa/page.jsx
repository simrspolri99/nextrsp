import React from 'react'
import Image from 'next/image'

const Hemodialisa = () => {
    return (
    <section>   
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full justify-center">
            <Image src="/hemodialisa1.jpeg" alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full justify-center">
            <Image src="/IMG_1168.png"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full justify-center">
            <Image src="/IMG_1173.png"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full justify-center">
            <Image src="/IMG_1179.png"alt="foto" width="1368" height="768"></Image>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        </div>

    <div className="text-center">
        <h1 className="text-4xl font-bold mt-20 mb-6">Hemodialisa</h1>
        </div>
        <div className='flex flex-wrap justify-center'>
        <div className="card m-4  w-FULL bg-blue-900 text-white shadow-xl flex flex-col">
            <div className="card-body flex flex-col justify-between">
            
            <h2 className="card-title">Apa Itu Hemodialisa?</h2>
            <p> Hemodialisis atau biasa disebut juga Hemodialisa adalah proses pembersihan darah dari zat-zat sampah, melalui proses penyaringan di luar tubuh.
                untuk melakukan hemodialisis ketika fungsi ginjal turun hingga 15 persen. Atau jika seseorang memiliki gejala 
                parah yang disebabkan oleh penyakit ginjal, seperti sesak napas, kelelahan, kram otot, mual atau muntah. 
                prosesnya akan dibantu menggunakan mesin khusus untuk menggantikan ginjal yang rusak agar tubuh bisa menyaring darah. 
                Mesin ini berperan sebagai ginjal artifisial (ginjal buatan) yang dapat menyingkirkan zat-zat kotor, garam, serta air 
                berlebih yang ada di dalam darah pengidap.Hemodialisa bekerja dengan baik bila kamu merasakan tingkat energi membaik dan nafsu makan yang lebih baik. 
                Hemodialisa mengurangi penumpukan garam dan cairan, sehingga kamu juga akan mengalami lebih sedikit sesak napas dan pembengkakan.
            </p>
            <h2 className="card-title">Apa saja Manfaat dari Hemodialisa?</h2>
            <li>Membersihkan Darah: Hemodialisa membantu membersihkan darah dari limbah, racun, dan kelebihan garam yang biasanya disaring oleh ginjal yang sehat. Ini penting karena ginjal yang tidak berfungsi dengan baik tidak dapat melakukan tugas penyaringan ini.</li>
            <li>Pengurangan Pembengkakan: Hemodialisa  dapat membantu mengurangi pembengkakan yang seringkali terjadi pada pasien dengan gagal ginjal yang tidak mampu mengatur kadar cairan dengan baik.</li>
            <h2 className="card-title">Tarif untuk hemodialisa ini sekitar Rp. 810.000,-</h2>
           </div>
            </div>
        </div>
    </section>

    )
}

export default Hemodialisa
