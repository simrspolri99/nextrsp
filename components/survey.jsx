import React from 'react';
import Link from 'next/link';

const Survey = () => {
    return (
        <div className="bg-gray-200 h-120 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-5 mt-5 text-black">SURVEY KEPUASAN PASIEN DAN LAPORAN KOMPLAIN</h1>
        <div className="flex flex-wrap justify-center">
            <div className="card w-96 m-4 bg-blue-900 text-white">
            <div className="card-body">
                <h2 className="card-title text-xl text-center font-bold mb-4">Survei Kepuasan Pasien</h2>
                <p>Format Pelaporan</p>
                <li>Nama Responden</li>
                <li>Nomor Rekam Medis</li>
                <li>Isi Survei</li>
                <div className="card-actions justify-end">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdtKOH5KORHCGYLaZe864DRcLiijFAFTBQAWgz0UYu5_e3hSA/viewform?usp=sf_link">
                    <button className="btn">Survey</button>
                </Link>
                </div>
            </div>
            </div>
            <div className="card w-96 m-4 bg-blue-900 text-white">
            <div className="card-body">
                <h2 className="card-title text-xl text-center font-bold mb-4">Laporan Komplain Pasien</h2>
                <p>Format Pelaporan</p>
                <li>Nama Responden</li>
                <li>Nomor Rekam Medis</li>
                <li>Isi Laporan</li>
                <div className="card-actions justify-end">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdjRjaJZsa98mxg7gUaGNlxkIi6JKYXCf9QsJtt6uI1IV7FlQ/viewform?usp=sf_link">
                    <button className="btn">Laporkan</button>
                </Link>
                </div>
            </div>
            </div>
            
        </div>
        </div>
    );
};

export default Survey;
