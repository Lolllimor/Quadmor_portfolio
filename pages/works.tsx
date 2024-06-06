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
    <main className='px-[50px] pt-[36px] flex flex-col items-center '>
      <div className='gap-[30px] w-full flex border border-[#fff] rounded-[24px] mx-[88px] mt-[92px]  pt-[46px] px-[51px] pb-[76px] mb-[400px]'>
        <div className='w-[45%]'>
          <h1 className='text-[60px] font-[500] w-[100%] max-[1440px]:text-[50px]'>
            My love for Design started with Architecture
          </h1>
        </div>
        <div className=' flex flex-col gap-[50px] cursor-pointer '>
          <div className='grid grid-cols-2 gap-[50px]'>
            <Link
              href='works/UI%20%2F%20UX%20Design'
              className='flex flex-col gap-[15px] cursor-pointer'
            >
              <div
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
                className=' max-[1440px]:w-[250px] w-[290px]  p-[32px] flex flex-col justify-between items-end h-[431px] border border-[#fff] rounded-[32px]'
              >
                <div className={`opacity-0 ${isHovered1 && "opacity-100"}`}>
                  <IoMdOpen color='#fff' size={40} />
                </div>
                <img
                  src='/images/graphics.svg'
                  className=' items-end h-[88px] w-[83px]'
                />
              </div>
              <p className='font-[700] text-[24px] pl-[10px]'>UI/UX Design</p>
            </Link>
            <Link
              href='works/Graphics Design'
              className='flex flex-col gap-[15px] cursor-pointer'
            >
              <div
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                className='w-[290px] max-[1440px]:w-[250px] p-[32px] flex flex-col justify-between items-end h-[431px] border border-[#fff] rounded-[32px]'
              >
                <div className={`opacity-0 ${isHovered2 && "opacity-100"}`}>
                  <IoMdOpen color='#fff' size={40} />
                </div>
                <img
                  src='/images/ui.svg'
                  className=' items-end h-[88px] w-[83px]'
                />
              </div>
              <p className='font-[700] text-[24px] pl-[10px]'>
                Graphics Design
              </p>
            </Link>
          </div>

          <div className='grid grid-cols-2 gap-[50px]'>
            <Link
              href='works/Brand Design'
              className='flex flex-col gap-[15px] cursor-pointer'
            >
              <div
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
                className='w-[290px] max-[1440px]:w-[250px] p-[32px] flex flex-col justify-between items-end h-[431px] border border-[#fff] rounded-[32px]'
              >
                <div className={`opacity-0 ${isHovered3 && "opacity-100"}`}>
                  <IoMdOpen color='#fff' size={40} />
                </div>
                <img
                  src='/images/brand.svg'
                  className=' items-end h-[88px] w-[83px]'
                />
              </div>
              <p className='font-[700] text-[24px] pl-[10px]'>Brand Design</p>
            </Link>

            <Link
              href='works/Illustration'
              className='flex flex-col gap-[15px] cursor-pointer'
            >
              <div
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
                className='w-[290px] max-[1440px]:w-[250px] p-[32px] flex flex-col justify-between items-end h-[431px] border border-[#fff] rounded-[32px]'
              >
                <div className={`opacity-0 ${isHovered4 && "opacity-100"}`}>
                  <IoMdOpen color='#fff' size={40} />
                </div>
                <img
                  src='/images/illustrate.svg'
                  className=' items-end h-[88px] w-[83px]'
                />
              </div>
              <p className='font-[700] text-[24px] pl-[10px]'>Illustrations</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Works;
