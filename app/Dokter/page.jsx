import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
    return (
        <div className="mt-24">
        <h1 className="text-center text-3xl font-black">Jadwal Dokter</h1>
        <div className="flex flex-wrap justify-center">

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Anak</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="dranak">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Bedah Umum</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drbedahumum">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Bedah Orthopedi</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drortho">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
                </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Bedah Saraf</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drsaraf">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Urologi</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drurologi">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Mata</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drmata">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis THT</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drtht">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Kulit dan Kelamin</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drkulit">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Paru</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drparu">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Jantung dan Pembuluh Darah</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drjantung">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Kesehatan Jiwa</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drjiwa">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>
            
            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Psikologi</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="psikologi">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Gigi dan Mulut</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drgigi">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Penyakit Dalam</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drdalam">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Rehabilitasi Medik</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drfisio">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Gizi</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drgizi">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Thorax</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drthorax">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Kebidanan</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drbidan">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Saraf</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drsaraf2">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Onkologi</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drtumor">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/IKON DR.png" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Dokter Spesialis Bedah Plastik</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="drplastik">
                <button className="btn bg-blue-900 text-white">LIHAT JADWAL</button>
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
