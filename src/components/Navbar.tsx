"use client";
import { DataContext } from "@/utils/dataContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Navbar: React.FC = () => {
  const { title, setTitle, changeDataSource } = useContext(DataContext);

  return (
    <nav className="bg-slate-900 w-full text-white flex justify-center px-2 md:px-6 fixed top-0 z-50">
      {/* Large screen */}
      <div className="hidden md:flex md:space-x-4 lg:space-x-8 items-center">
        <Link href="#presentation">
          <p className="hover:text-cyan-200">{`Présentation`}</p>
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
      <div className="hidden absolute right-0 md:flex flex-col justify-center w-[10vw] h-full buttons">
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
      {/* Small screen */}
      <div className="md:hidden flex w-full justify-between items-center text-sm">
        <div className="flex flex-col space-y-1">
          <Link href="#presentation">
            <button className="hover:text-cyan-200 mb-1 px-2 rounded-md w-full border-b">{`Présentation`}</button>
          </Link>
          <Link href="#programme" className="hover:text-cyan-200">
            <button className="hover:text-cyan-200 mb-1 px-2 rounded-md w-full border-b">
              Programme
            </button>
          </Link>
          <Link href="#team" className="hover:text-cyan-200">
            <button className="hover:text-cyan-200 mb-1 px-2 rounded-md w-full border-b">{`L'équipe`}</button>
          </Link>
          <Link href="#information" className="hover:text-cyan-200">
            <button className="hover:text-cyan-200 mb-1 px-2 rounded-md w-full border-b">{`Informations`}</button>
          </Link>
        </div>
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
        <div className=" flex flex-col justify-center w-[15vw] h-full buttons">
          <button
            className={`w-full py-1 mb-1 border border-slate-400 ${
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
            className={`mx-auto py-1 w-full mb-1 border border-slate-400 ${
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
            className={`mx-auto py-1 w-full border border-slate-400 ${
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
      </div>
    </nav>
  );
};

export default Navbar;
