import React from 'react'
import Image from 'next/image'

const berita1 = () => {
  return (
    <div className="">
      
      <div className='flex flex-wrap justify-center'>
      <Image src="/maul.png" width="1368" height="768" alt="foto1"></Image>
        <div className="card m-4 w-full bg-blue-900 text-white shadow-xl flex flex-col">
            <div className="card-body flex flex-col justify-between">
            <h2 className="card-title">MAULID NABI MUHAMMAD SAW 1445 H / 2023</h2>
            <p>HUMAS RSPOLRI</p>
            <p>
                Pada hari yang penuh berkah ini, Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri merayakan Maulid Nabi Muhammad SAW 1445 H/2023 dengan suka cita dan kebersamaan. Acara tersebut diprakarsai dan dipimpin oleh Brigjen Pol Dr. Haryanto Sp.PD, seorang pemimpin yang berdedikasi dan berkomitmen tinggi terhadap pelayanan kesehatan di lingkungan Polri.

                Spiritualitas dan Kebersamaan

                Pada perayaan Maulid Nabi Muhammad SAW, suasana spiritualitas terasa kuat di seluruh Rumah Sakit Bhayangkara. Kegiatan dimulai dengan pembacaan shalawat dan doa bersama, menciptakan atmosfer yang penuh kehangatan dan kedamaian di tengah-tengah tenaga medis, pasien, dan keluarga mereka.

                Brigjen Pol Dr. Haryanto Sp.PD dalam sambutannya menekankan pentingnya semangat kebersamaan dan saling mendukung dalam melaksanakan tugas mulia memberikan pelayanan kesehatan kepada masyarakat. Beliau menyampaikan bahwa perayaan Maulid Nabi adalah momen untuk merefleksikan nilai-nilai kehidupan Nabi Muhammad SAW yang penuh kasih sayang, keadilan, dan keteladanan.
            </p>
            <div className="card-actions justify-end"></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default berita1