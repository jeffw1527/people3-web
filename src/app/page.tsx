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
        <Company/>
        <DataLabel/>
        <RLHF/>
        <DataCuration/>
        <DataReTrade />
        <User />
        <Reputation />
        <Backer />
        <Footer />

      </div>
    </main>
  );
}
