import React from "react";
import {
  hoveredAtom1,
  hoveredAtom2,
  hoveredAtom3,
  hoveredAtom4,
} from "./api/query_store";
import { usePortal } from "@ibnlanre/portal";
import { IoMdOpen } from "react-icons/io";
import Link from "next/link";

const Works = () => {
  const [isHovered1, setIsHovered1] = usePortal.atom(hoveredAtom1);
  const [isHovered2, setIsHovered2] = usePortal.atom(hoveredAtom2);
  const [isHovered3, setIsHovered3] = usePortal.atom(hoveredAtom3);
  const [isHovered4, setIsHovered4] = usePortal.atom(hoveredAtom4);
  return (
    <main className="px-[50px] pt-[36px] flex flex-col items-center w-full max-[500px]:px-0 max-[500px]:pt-0 max-[1024px]:px-0">
      <div className="gap-[30px] w-full flex border border-[#fff] rounded-[24px] max-[500px]:pt-[14px] max-[500px]:mx-[24px] max-[500px]:pb-[29px] mx-[88px] mt-[92px] max-[500px]:mt-[50px] max-[500px]:flex-col  pt-[46px] px-[51px] pb-[76px] mb-[400px] max-[500px]:px-[31px] max-[500px]:mb-[100px] max-[1024px]:mb-[200px]">
        <div className="w-[45%] max-[1024px]:w-[35%] max-[800px]:w-full">
          <h1 className="text-[60px] font-[500] w-[100%]  max-[500px]:text-[35px] max-[1024px]:text-[40px]">
            My love for Design started with Architecture
          </h1>
        </div>
        <div className=" flex flex-col gap-[50px] cursor-pointer max-[1024px]:gap-[35px] max-[1024px]:flex-1">
          <div className="grid grid-cols-2 gap-[50px]">
            <Link
              href="works/UI%20%2F%20UX%20Design"
              className="flex flex-col gap-[15px] cursor-pointer"
            >
              <div
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
                className=" max-[1440px]:w-[250px] max-[1024px]:rounded-[24px] w-[290px] max-[500px]:w-[132px] max-[500px]:h-[171px] max-[500px]:rounded-[11px] p-[32px] flex flex-col justify-between max-[1024px]:p-[20px] items-end h-[431px] border border-[#fff] rounded-[32px] max-[500px]:p-2.5 min-w-[292px] max-[1024px]:min-w-[100px] max-[1024px]:h-[300px] max-[1024px]:w-[220px]"
              >
                <div className={`opacity-0 ${isHovered1 && "opacity-100"}`}>
                  <IoMdOpen
                    color="#fff"
                    size={40}
                    className="max-[500px]:w-[20px] max-[500px]:h-[20px]"
                  />
                </div>
                <div className=" max-[500px]:w-full max-[500px]:flex max-[500px]:items-start">
                  <img
                    src="/images/graphics.svg"
                    className="h-[88px] w-[83px] max-[500px]:w-[39px] max-[500px]:h-[39px] max-[1024px]:h-[55px]"
                  />
                </div>
              </div>
              <p className="font-[700] text-[24px] pl-[10px] max-[1024px]:text-[20px]">
                UI/UX Design
              </p>
            </Link>
            <Link
              href="works/Graphics Design"
              className="flex flex-col gap-[15px] cursor-pointer"
            >
              <div
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                className="max-[1024px]:p-[20px] max-[1024px]:rounded-[24px] max-[1440px]:w-[250px] w-[290px] max-[500px]:w-[132px] max-[500px]:h-[171px] max-[500px]:rounded-[11px] p-[32px] flex flex-col justify-between items-end h-[431px] border border-[#fff] rounded-[32px] max-[500px]:p-2.5 min-w-[292px] max-[1024px]:min-w-[100px] max-[1024px]:h-[300px] max-[1024px]:w-[220px]"
              >
                <div className={`opacity-0 ${isHovered2 && "opacity-100"}`}>
                  <IoMdOpen
                    color="#fff"
                    size={40}
                    className="max-[1024px]:h-5"
                  />
                </div>
                <div className=" max-[500px]:w-full max-[500px]:flex max-[500px]:items-start">
                  {" "}
                  <img
                    src="/images/ui.svg"
                    className="h-[88px] w-[83px] max-[500px]:w-[39px] max-[500px]:h-[39px] max-[1024px]:h-[55px] "
                  />
                </div>
              </div>
              <p className="font-[700] text-[24px] pl-[10px] max-[1024px]:text-[20px]">
                Graphics Design
              </p>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-[50px]">
            <Link
              href="works/Brand Design"
              className="flex flex-col gap-[15px] cursor-pointer"
            >
              <div
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
                className="max-[1024px]:p-[20px] max-[1024px]:rounded-[24px] max-[1440px]:w-[250px] w-[290px] max-[500px]:w-[132px] max-[500px]:h-[171px] max-[500px]:rounded-[11px] p-[32px] flex flex-col justify-between items-end h-[431px] border border-[#fff] rounded-[32px] max-[500px]:p-2.5 min-w-[292px] max-[1024px]:min-w-[100px] max-[1024px]:h-[300px] max-[1024px]:w-[220px]"
              >
                <div className={`opacity-0 ${isHovered3 && "opacity-100"}`}>
                  <IoMdOpen color="#fff" size={40} />
                </div>
                <div className=" max-[500px]:w-full max-[500px]:flex max-[500px]:items-start">
                  {" "}
                  <img
                    src="/images/brand.svg"
                    className="h-[88px] w-[83px] max-[500px]:w-[39px] max-[500px]:h-[39px] max-[1024px]:h-[55px] "
                  />
                </div>
              </div>
              <p className="font-[700] text-[24px] pl-[10px] max-[1024px]:text-[20px]">
                Brand Design
              </p>
            </Link>

            <Link
              href="works/Illustration"
              className="flex flex-col gap-[15px] cursor-pointer"
            >
              <div
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
                className="max-[1024px]:p-[20px] max-[1024px]:rounded-[24px] max-[1440px]:w-[250px] w-[290px] max-[500px]:w-[132px] max-[500px]:h-[171px] max-[500px]:rounded-[11px] p-[32px] flex flex-col justify-between items-end h-[431px] border border-[#fff] rounded-[32px] max-[500px]:p-2.5 min-w-[292px] max-[1024px]:min-w-[100px] max-[1024px]:h-[300px] max-[1024px]:w-[220px]"
              >
                <div className={`opacity-0 ${isHovered4 && "opacity-100"}`}>
                  <IoMdOpen color="#fff" size={40} />
                </div>
                <div className=" max-[500px]:w-full max-[500px]:flex max-[500px]:items-start">
                  <img
                    src="/images/illustrate.svg"
                    className="h-[88px] w-[83px] max-[500px]:w-[39px] max-[500px]:h-[39px] max-[1024px]:h-[55px] "
                  />
                </div>
              </div>
              <p className="font-[700] text-[24px] pl-[10px] max-[1024px]:text-[20px]">
                Illustrations
              </p>
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-full border-dashed mb-[20px] hidden max-[500px]:flex" />
    </main>
  );
};

export default Works;
