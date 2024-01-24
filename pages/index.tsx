import { Footer } from "@/footer";
import { Navbar } from "@/navbar";
import { Wrapper } from "@/wrapper";
import { Homepage } from "@/homepage";
import { SetStateAction, useState } from "react";
import CaseStudy from "./case-study";

export default function Home() {
  const [selected, setSelected] = useState('')
  console.log(selected)
  return (
    <main className="px-[88px] pt-[36px] flex flex-col items-center">
      <Navbar onDataUpdate={(data: SetStateAction<string>) =>setSelected(data)} />
      <Wrapper>
      {(selected === 'home' || selected === '') && <Homepage/>}
{selected === 'case' && <CaseStudy/>}
 
        <Footer />
      </Wrapper>
    </main>
  );
}
