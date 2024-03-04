import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
    return (
        <div className="mt-24">
        <h1 className="text-center text-3xl font-black">RAWAT INAP</h1>
        <div className="flex flex-wrap justify-center">
            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/promoter6.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG VVIP PROMOTER 6 KHUSUS KEPRESIDENAN</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 2.500.000,- </li>
                  <li>Fasilitas :</li>
                  <li> • 1 Tempat Tidur Pasien</li>
                  <li> • 1 Kamar Tunggu Pasien</li>
                  <li> • Kamar Mandi Dalam (Water Heater)</li>
                  <li> • Ruang Tamu Pribadi</li>
                  <li> • Kulkas, AC, TV</li>
                  <li> • Meja Makan</li>
                  <li> • Lemari Pakaian Pasien</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                  
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="PagePromoter6">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/vvip_promoter5.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60" />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG VVIP PROMOTER 5</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 1.250.000,- </li>
                  <li>Fasilitas :</li>
                  <li> • 1 Tempat Tidur Pasien</li>
                  <li> • 1 Kamar Tunggu Pasien</li>
                  <li> • Kamar Mandi Dalam</li>
                  <li> • Ruang Tamu Pribadi</li>
                  <li> • Kulkas, AC, TV</li>
                  <li> • Meja Makan</li>
                  <li> • Lemari Pakaian Pasien</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="PagePromoter5">
                <button className="btn bg-blue-900 text-white ">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/vvip_promoter53.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60" />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG VIP PROMOTER 5</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 510.000,- </li>
                  <li>Fasilitas :</li>
                  <li> • 1 Tempat Tidur Pasien</li>
                  <li> •  Sofa</li>
                  <li> • Kamar Mandi Dalam</li>
                  <li> • Kulkas, AC, TV</li>
                  <li> • Lemari Pakaian Pasien</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Pagepromoter5vip">
                <button className="btn bg-blue-900 text-white ">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>
            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
              <Image src="/Ranap_Anton41.png" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
              <div>
                <h2 className="card-title">RUANG VVIP ANTON 4</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif VVIP : Rp. 2.125.000,- </li>
                  <li>Fasilitas :</li>
                  <li> • 1 Tempat Tidur Pasien</li>
                  <li> • 1 Kamar Tunggu Pasien</li>
                  <li> • Kamar Mandi Dalam (Water Heater)</li>
                  <li> • Ruang Tamu Pribadi</li>
                  <li> • Kulkas, AC, TV</li>
                  <li> • Meja Makan</li>
                  <li> • Lemari Pakaian Pasien</li>
                  <li> • Sofa </li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
              </div>
              <div className="card-actions justify-end mt-auto">
                <Link href="/Pageanton">
                  <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
              <Image src="/Ranap_Anton41.png" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
              <div>
                <h2 className="card-title">RUANG VIP ANTON 4</h2>
                <ul className="text-sm font-medium">
                <li>Tarif VIP : Rp. 1.500.000,- </li>
                  <li>Fasilitas :</li>
                  <li> • 1 Tempat Tidur Pasien</li>
                  <li> • Kamar Mandi Dalam (Water Heater)</li>
                  <li> • Kulkas, AC, TV</li>
                  <li> • Lemari Pakaian Pasien</li>
                  <li> • Sofa </li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
              </div>
              <div className="card-actions justify-end mt-auto">
                <Link href="/Pageantonvip">
                  <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
              </div>
            </div>
          </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/vip_pamen.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG VIP PAMEN</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 510.000,-</li>
                  <li>Fasilitas :</li>
                  <li> • 1 Tempat Tidur Pasien</li>
                  <li> • 1 Sofa Bed</li>
                  <li> • Kamar Mandi Dalam</li>
                  <li> • Lemari Es, AC, TV</li>
                  <li> • Lemari Pakaian Pasien</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Vipamen">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/pamen11.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG PAMEN KELAS 1</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 260.000,-</li>
                  <li>Fasilitas :</li>
                  <li> • 2 Tempat Tidur Pasien</li>
                  <li> • 2 kursi Penunggu Pasien</li>
                  <li> • Kamar Mandi Dalam</li>
                  <li> • AC, TV</li>
                  <li> • Lemari Pakaian Pasien</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Pamen1">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/suparno1.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG VIP Dr. Soeparno, Sp.A 2</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 510.000,-</li>
                  <li>Fasilitas :</li>
                  <li> • 1 Tempat Tidur Pasien</li>
                  <li> • 1 Set Kursi dan Meja penunggu</li>
                  <li> • Kamar Mandi Dalam</li>
                  <li> • Lemari Pakaian Pasien</li>
                  <li> • Kulkas, AC, TV</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Suparno">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>

            
            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/cendrawasih1.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG CENDRAWASIH 1</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 260.000 - </li>
                  <li>Fasilitas :</li>
                  <li> • 1 Tempat Tidur Pasien</li>
                  <li> • 1 Sofa penunggu pasien</li>
                  <li> • Kulkas, AC, dan TV </li>
                  <li> • Kamar mandi dalam</li>
                  <li> •  Lemari Pakaian Pasien</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Cendrawasih1">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>
            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/cempaka1.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG CEMPAKA KELAS 1</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 260.000,-</li>
                  <li>Fasilitas :</li>
                  <li> • 1 Tempat Tidur Pasien</li>
                  <li> • 2 Kursi Tamu dan 1 meja</li>
                  <li> • Kamar Mandi Dalam</li>
                  <li> • AC,TV, dan Kulkas</li>
                  <li> • Lemari Pakaian Pasien</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Cempaka1">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>
          
            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/cempaka31.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG CEMPAKA KELAS 3</h2>
                <ul className="text-sm font-medium">
                <li>Tarif : Rp. 75.000,- </li>
                  <li>Fasilitas :</li>
                  <li> • 1 Ruangan 4 Tempat Tidur Pasien</li>
                  <li> • Kamar Mandi bersama (di dalam)</li>
                  <li> • 1 kursi dan Lemari pasien</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Cempaka3">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>
            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/hardja11.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG HARDJA KELAS 1</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 260.000,-</li>
                  <li>Fasilitas :</li>
                  <li> • 1 Tempat Tidur Pasien</li>
                  <li> • 2 Kursi Tamu dan 1 meja</li>
                  <li> • Kamar Mandi Dalam</li>
                  <li> • AC,TV, dan Kulkas</li>
                  <li> • Lemari Pakaian Pasien</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Hardja1">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>
          
            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/hardja31.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG HARDJA KELAS 3</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 75.000,- </li>
                  <li>Fasilitas :</li>
                  <li> • 1 Ruangan 2 Tempat Tidur Pasien dan meja obat</li>
                  <li> • Kamar Mandi bersama (di dalam)</li>
                  <li> • 2 kursi dan Lemari pasien</li>
                  <li> • AC dan TV</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Hardja3">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/parkit11.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG PARKIT ISOLASI</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 75.000,- </li>
                  <li>Fasilitas :</li>
                  <li> • 1 ruangan untuk  8 s.d 20 orang</li>
                  <li> • Kamar Mandi bersama (di dalam)</li>
                  <li> • 1 kursi dan Lemari pasien</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Parkit1">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>
            
            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/icukhusus1.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG ICU KHUSUS</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 400.000,-</li>
                  <li>Fasilitas :</li>
                  <li> • 1 Tempat Tidur Pasien</li>
                  <li> • 1 Lemari pasien</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="iccukhusus">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/bougenvile1.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG BOUGENVILE</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 145.000,-</li>
                  <li>(Perawatan Intensif Bayi)</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Bougenvile">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/niccu1.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG NICCU</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 400.000,-</li>
                  <li>(Perawatan Intensif Bayi)</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Niccu">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>
            
            <div className="card m-4 w-80 bg-base-100 shadow-xl flex flex-col">
            <figure>
                <Image src="/picu3.jpeg" alt="Fotoranap" width="1368" height="768" className="h-60"  />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">RUANG PICU DAN HCU ANAK</h2>
                <ul className="text-sm font-medium">
                  <li>Tarif : Rp. 400.000,-</li>
                  <li>(Perawatan intensif anak)</li>
                  <h2 className="text-center text-sm font-black">Tarif Dapat Berubah Sewaktu-Waktu</h2>
                </ul>
                <div className="card-actions justify-end mt-auto">
                <Link href="Picudanhcuanak">
                <button className="btn bg-blue-900 text-white">RESERVASI</button>
                </Link>
                </div>
            </div>
            </div>

            

            {/* Repeat the above card structure for additional cards */}
            {/* Add more cards as needed */}
        </div>
        </div>
    );
    };

export default Page;
