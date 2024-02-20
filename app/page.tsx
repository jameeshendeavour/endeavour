import ByNumbers from "@/components/ByNumbers";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import MoreAbout from "@/components/MoreAbout";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white h-full w-full'>
      <Hero />
      <Industries />
      <ByNumbers />
      <MoreAbout />      
    </div>
  );
}
