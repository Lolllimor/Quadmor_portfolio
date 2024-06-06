import { Footer } from "@/footer";
import { Navbar } from "@/navbar";
import { useRouter } from "next/router";
import React from "react";
import { CiShare1 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

const SubWork = () => {
  const { back, push, query } = useRouter();
  console.log(query)

  return (
    <>
      <main className='px-[88px] pt-[36px] flex flex-col items-center '>
        <Navbar />
        <div className='flex py-[30px] w-full justify-start '>
          <p
            className='cursor-pointer'
            onClick={() => {
              back();
            }}
          >
            Works
          </p>
          <div className='flex gap-2 pl-2 items-center'>
            <IoIosArrowForward size='12' color='#fff' />
            <p className=''>{query.works}</p>
          </div>
        </div>

        <div className='  w-full border border-[#fff] rounded-[80px] p-[50px] flex gap-[50px]'>
          <div className='flex flex-col justify-between w-full'>
            <p className='pb-[16px] text-[48px] font-[700]'>
              Social Media Designs
            </p>
            <div className="flex gap-[20px] flex-col">
              <p className="text-[20px] font-[500]">
                In this thought-provoking article, we explore the seamless
                integration of artistry and design through the lens of [Your
                Name], a visionary designer and artist. In this
                thought-provoking article, we explore the seamless integration
                of artistry and design through the lens of [Your Name], a
                visionary designer and artist.
              </p>
              <div className='flex items-center gap-[8px]'>
                <p className='font-[600] text-[24px]'>Open</p>
                <CiShare1 color='#fff' size={24} />
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[300px] border border-[#fff]"></div>
        </div>
        <div className='mt-[90px] flex justify-start items-start w-full'>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default SubWork;
