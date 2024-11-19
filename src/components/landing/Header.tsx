<<<<<<< HEAD
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push("/dashboard"); // Redirige a la página de búsqueda
  };

  return (
    <header className="flex justify-between items-center p-5 bg-white shadow">
      <a href="./">
        <Image
          src="/wavyNode.svg"
          alt="WavyNode Logo"
          width={100}
          height={50}
        />
      </a>
      <h1 className="text-3xl font-medium text-gray-800">
        {" "}
        <a href="./">Wavy Node</a>
      </h1>
      <button
        className="bg-gray-800 text-white text-sm py-1 px-3 rounded-full"
        onClick={handleSearchClick}
      >
        Platform
=======
import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-5 bg-white shadow-lg space-y-4 md:space-y-0 md:space-x-4">
      <Image src="/wavyNode.svg" alt="WavyNode Logo" width={100} height={50} />
      <h1 className="text-3xl font-medium text-gray-800">Wavy Node</h1>
      
      <button className="bg-gray-800 text-white text-sm py-2 px-4 rounded-full hover:bg-gray-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
       <a href="https://tally.so/r/3XEAed?transparentBackground=1">Alpha</a> 
>>>>>>> origin/main
      </button>
    </header>
  );
}
