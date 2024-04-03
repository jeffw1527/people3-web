import Image from "next/image";
import Header  from "@/components/Header"
import Intruduction  from "@/components/Intruduction"
import ProductList  from "@/components/ProductList"
import Company  from "@/components/Company"
import DataLabel  from "@/components/DataLabel"
import RLHF  from "@/components/RLHF"
import DataCuration  from "@/components/DataCuration"
import DataReTrade  from "@/components/DataReTrade"
import User  from "@/components/User"
import Reputation  from "@/components/Reputation"
import Backer  from "@/components/Backer"
import Footer  from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className=" fixed top-0 left-0 bg-white z-50">
        <Header/>
      </div>
      <div className="absolute top-[3.75vw] left-0">
        <Intruduction/>
        <ProductList/>
        <div  id="customers" className="w-full h-[12.5vw]"></div>
        <Company/>
        <div id="products" className="w-full h-[10.625vw]"></div>
        <DataLabel/>
        <RLHF/>
        <DataCuration/>
        <DataReTrade />
        <div  id="community" className="w-full h-[10.5vw]"></div>
        <User />
        <div id="economic" className="w-full h-[6.25vw]"></div>
        <Reputation />
        <div id="backers" className="w-full h-[12.5vw]"></div>
        <Backer />
        <Footer />

      </div>
    </main>
  );
}
