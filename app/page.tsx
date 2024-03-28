"use client"
import { useEffect } from "react"
import Image from "next/image";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Aos from "aos"
import "aos/dist/aos.css"; 


export default function Home() {


  useEffect(() => {
    Aos.init({
       offset: 0,
       duration: 800,
       easing: "ease-in-back",
       delay: 0,
    })
  }, [])
  return (
    <>
      <main className='flex justify-center  '>
        <div>
          <section className='lg:max-w-7xl w-[95%] lg:mx-[0px] mx-auto lg:w-full' >
            <Homepage />
          </section>
          
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
