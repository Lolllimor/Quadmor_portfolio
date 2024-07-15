import { Footer } from "@/footer";
import { Navbar } from "@/navbar";
import { Wrapper } from "@/wrapper";
import { Homepage } from "@/homepage";
import CaseStudy from "./case-study";
import Works from "./works";
import { selectedRouteAtom } from "./api/query_store";
import { usePortal } from "@ibnlanre/portal";
import Profile from "./profile";
import Gallery from "./gallery";

export default function Home() {
  const [route] = usePortal.atom(selectedRouteAtom);
  return (
    <main className="px-[88px] max-[800px]:px-[24px] pt-[36px] flex flex-col items-center ">
      <Navbar />
      <Wrapper>
        {(route === "home" || route === "") && <Homepage />}
        {route === "case" && <CaseStudy />}
        {route === "works" && <Works />}
        {route === "profile" && <Profile />}

        {route === "gallery" && <Gallery />}
        <Footer />
      </Wrapper>
    </main>
  );
}
