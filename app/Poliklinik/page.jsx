import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
    return (
        <div className="mt-24">
        <h1 className="text-center text-3xl font-black">POLIKLINIK</h1>
        <div className="flex flex-wrap justify-center">
            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/pd1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Penyakit Dalam</h2>
                <p></p>
                <div className="card-actions justify-end">
                <Link href="Penyakitdalam">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/anak1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Anak</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Anak">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/bedah2.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Bedah Umum</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Bedahumum">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/orto1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Bedah Orthopedi dan Traumatologi</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Ortopedi">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
                </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/saraf1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Saraf</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="saraf">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/urologi2.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Bedah Urologi</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="urologi">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/mata1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Mata</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Mata">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/tht2.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis THT</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Tht">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/kulit1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Kulit dan Kelamin</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Kulit">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/paru1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Paru</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Paru">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/jantung1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Jantung dan Pembuluh Darah</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Jantung">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/jiwa1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Kesehatan Jiwa</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Jiwa">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>
            
            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/andro1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Spesialis Andrologi dan Psikologi</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Andrologi">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/gigi1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Gigi dan Mulut</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Gigi">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/matahari1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Matahari (melayani VCT pasien HIV / AIDS)</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Matahari">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/endoskopi1.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Poliklinik Endoskopi</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Endoskopi">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
                </Link>
                </div>
            </div>
            </div>

            <div className="card m-4 w-80 bg-base-100 shadow-xl">
            <figure>
                <Image src="/endoskopi2.jpeg" width="1368" height="768" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Pelayanan Pemecah Batu Ginjal (ESWL)</h2>
                <p> </p>
                <div className="card-actions justify-end">
                <Link href="Eswl">
                <button className="btn bg-blue-900 text-white">Kunjungi</button>
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
