"use client";
import { DataContext } from "@/utils/dataContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Navbar: React.FC = () => {
  const { title, setTitle, changeDataSource } = useContext(DataContext);
  console.log("Navbar title", title);

  return (
    <nav className="bg-slate-900 w-full text-white flex justify-center px-6 fixed top-0 z-50">
      <div className="hidden md:flex md:space-x-4 lg:space-x-8 items-center">
        <Link href="#presentation">
          <p className="hover:text-cyan-200">{`Présentatoin`}</p>
        </Link>
        <Link href="#programme" className="hover:text-cyan-200">
          <p className="hover:text-cyan-200">Programme</p>
        </Link>
        <div className="flex items-center">
          <Link href="#home" className="text-xl font-bold">
            <Image
              alt=""
              src="/assets/images/logo-asso.png"
              width="120"
              height="90"
              className="border-2 border-yellow-600 rounded-full"
            />
          </Link>
        </div>
        <Link href="#team" className="hover:text-cyan-200">
          <p className="hover:text-cyan-200">{`L'équipe`}</p>
        </Link>
        <Link href="#information" className="hover:text-cyan-200">
          <p className="hover:text-cyan-200">{`Informations`}</p>
        </Link>
      </div>
      <div className="absolute right-0 flex flex-col justify-center w-[10vw] h-full buttons">
        <button
          className={`mx-auto py-1 w-[80%] mb-1 border border-slate-400 ${
            title === "august" ? "bg-yellow-500" : "bg-yellow-700"
          } text-white font-bold rounded-lg hover:bg-yellow-500 hover:text-slate-800 transition duration-300 text-md`}
          onClick={() => {
            setTitle("august");
            changeDataSource("august");
          }}
        >
          {`Aout`}
        </button>
        <button
          className={`mx-auto py-1 w-[80%] mb-1 border border-slate-400 ${
            title === "july" ? "bg-green-500" : "bg-green-700"
          } text-white font-bold rounded-lg hover:bg-green-500 hover:text-slate-800 transition duration-300 text-md`}
          onClick={() => {
            setTitle("july");
            changeDataSource("july");
          }}
        >
          Juillet
        </button>
        <button
          className={`mx-auto py-1 w-[80%] border border-slate-400 ${
            title === "winter" ? "bg-cyan-500" : "bg-cyan-700"
          } text-white font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-800 transition duration-300 text-md`}
          onClick={() => {
            setTitle("winter");
            changeDataSource("winter");
          }}
        >
          Février
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
