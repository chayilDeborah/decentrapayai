import Image from "next/image";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
  <>
  <main  className='flex justify-center'>
    <section className='lg:max-w-7xl w-[95%] lg:w-full'>
      <Homepage />
    </section>

  </main>
  </>
  );
}
