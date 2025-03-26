"use client";
import { useEffect } from "react";

const Page = () => {
  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false,
  }).format();
  
  let hour = new Date().getHours();
  let greeting = ''
  let backgroundStyle = '';
 
  if (hour >= 0 && hour <= 12) {
    greeting = 'Bom Dia';
    backgroundStyle = "bg-gradient-to-r from-sky-500 to-indigo-500"
  }else if (hour > 12 && hour < 18) {
    greeting = 'Boa Tarde';
    backgroundStyle = "bg-gradient-to-r from-yellow-300 to-orange-500";
  } else if (hour >= 18 && hour < 24) {
    greeting = 'Boa Noite';
    backgroundStyle = "bg-gradient-to-r from-gray-800 to-blue-900";
  }

  useEffect(() => {
    document.body.style.background = ""; // Remove o background do body se necessário
  }, []);

  return(
  <div className={`w-screen h-screen flex flex-col justify-center items-center text-black 
  ${backgroundStyle}`}>

  <div className="text-9xl">{fullTime}</div>
  <div className="text-3xl">{greeting}</div>

  </div>

)}
export default Page;