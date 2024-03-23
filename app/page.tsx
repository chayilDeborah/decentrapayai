import Image from "next/image";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className='flex justify-center  '>
        <div>
          <section className='lg:max-w-7xl w-[95%] lg:mx-[0px] mx-auto lg:w-full'>
            <Homepage />
          </section>
          
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
