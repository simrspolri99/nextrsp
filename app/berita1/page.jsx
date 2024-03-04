import React from 'react'
import Image from 'next/image'

const berita1 = () => {
  return (
    <div className="">
      <div className='flex flex-wrap justify-center mt-24'>
        <Image src="/konf.png" width="1368" height="768" alt="foto1" ></Image>
        <div className="card m-4 w-full bg-blue-900 text-white shadow-xl flex flex-col">
            <div className="card-body flex flex-col justify-between">
            <h2 className="card-title">KONFERENSI PERS DALAM RANGKA PENANGANAN KORBAN KABEL OPTIK DI JAKARTA SELATAN</h2>
            <p>HUMAS RSPOLRI</p>
            <p> Dalam upaya mengatasi permasalahan serius yang timbul akibat insiden kabel optik di wilayah Jakarta Selatan, sebuah konferensi pers digelar hari ini untuk menyampaikan langkah-langkah penanganan serta informasi terkini terkait dampak dan solusi yang diambil.

Latar Belakang Kejadian

Insiden putusnya kabel optik di Jakarta Selatan telah menciptakan gangguan serius dalam layanan komunikasi dan internet bagi warga setempat. Kejadian ini menimbulkan dampak negatif terhadap kehidupan sehari-hari, bisnis, dan aktivitas masyarakat secara keseluruhan.

Langkah-langkah Penanganan

Dalam konferensi pers ini, pihak berwenang dan penyelenggara layanan telekomunikasi menyampaikan langkah-langkah konkret yang diambil untuk mengatasi situasi ini:

Perbaikan Cepat: Tim teknis telah dikerahkan untuk melakukan perbaikan secepat mungkin guna mengembalikan konektivitas dan layanan yang terputus akibat kerusakan kabel optik.

Komunikasi dengan Masyarakat: Pihak terkait berkomitmen untuk terus memberikan informasi terkini kepada masyarakat melalui berbagai saluran komunikasi. Informasi tersebut melibatkan perkiraan waktu pemulihan layanan, perkembangan perbaikan, dan solusi sementara yang dapat digunakan oleh warga.

Pencegahan Masa Depan: Pihak terkait akan melakukan evaluasi menyeluruh terhadap infrastruktur kabel optik dan menerapkan langkah-langkah pencegahan untuk mengurangi risiko kejadian serupa di masa depan.

Keterlibatan Pihak Terkait

Dalam konferensi pers ini, pihak terkait, termasuk perwakilan pemerintah setempat, penyedia layanan telekomunikasi, dan otoritas terkait lainnya, berkomitmen untuk bekerja sama demi penanganan efektif dan pemulihan segera.

Pesan untuk Masyarakat

Masyarakat diimbau untuk tetap tenang dan bersabar selama proses perbaikan berlangsung. Pihak terkait memahami dampak yang ditimbulkan dan berjanji untuk melakukan segala upaya guna mempercepat pemulihan layanan.

Konferensi pers ini memberikan gambaran singkat tentang upaya konkret yang dilakukan untuk penanganan krisis akibat putusnya kabel optik di Jakarta Selatan. Semua pihak terlibat bersatu padu untuk memberikan solusi yang terbaik demi kepentingan bersama.
            </p>
            <div className="card-actions justify-end"></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default berita1