"use client"
import Image from 'next/image';
import dashboard from '../../public/dashboard.png';
import { BlueButton } from '../NavBar/NavBar';


export function Dashboard() {
  return (
    <>
      <header className="p-5 text-slate-400 ">
        <h3 className="text-xl font-bold flex items-center">
            <Image src={dashboard} alt="Dashboard" width={30} height={30} className="mr-2" />
            Dashboard
        </h3>
      </header>
      <main className="p-5">
      <h3 className="text-xl font-bold flex items-center">
            <Image src={dashboard} alt="Dashboard" width={30} height={30} className="mr-2" />
            Dashboard
        </h3>
        </main>
    </>
  );
}
