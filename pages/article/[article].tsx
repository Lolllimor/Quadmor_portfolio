import { Footer } from "@/footer";
import { Navbar } from "@/navbar";
import { useRouter } from "next/router";
import React from "react";

const Article = () => {
  const { back, push } = useRouter();

  return (
    <>
      <main className='px-[88px] pt-[36px] flex flex-col items-center '>
        <Navbar />
        <p
          className='py-[30px] font-[600] text-left w-full cursor-pointer'
          onClick={() => back()}
        >
          Go back to Articles
        </p>
        <div className='  w-full border border-[#fff] rounded-[24px] px-[88px] pt-[64px] pb-[200px]'>
          <p className='pb-[16px]'>DESIGN</p>
          <h1 className='text-[48px] font-[600] text-[#fff]'>
            The Rule of Third; Success stories all together
          </h1>
          <img src='' className='h-[622px] py-[48px]' />
          <div className='flex gap-[20px] flex-col'>
            <p className='text-[24px] font-[500]'>
              In this thought-provoking article, we explore the seamless
              integration of artistry and design through the lens of [Your
              Name], a visionary designer and artist. In this thought-provoking
              article, we explore the seamless integration of artistry and
              design through the lens of [Your Name], a visionary designer and
              artist.
            </p>
            <p className='text-[24px] font-[500]'>
              In this thought-provoking article, we explore the seamless
              integration of artistry and design through the lens of [Your
              Name], a visionary designer and artist. In this thought-provoking
              article, we explore the seamless integration of artistry and
              design through the lens of [Your Name], a visionary designer and
              artist. In this thought-provoking article, we explore the seamless
              integration of artistry and design through the lens of [Your
              Name], a visionary designer and artist. In this thought-provoking
              article, we explore the seamless integration of artistry and
              design through the lens of [Your Name], a visionary designer and
              artist. In this thought-provoking article, we explore the seamless
              integration of artistry and design through the lens of [Your
              Name], a visionary designer and artist. In this thought-provoking
              article, we explore the seamless integration of artistry and
              design through the lens of [Your Name], a visionary designer and
              artist. In this thought-provoking article, we explore the seamless
              integration of artistry and design through the lens of [Your
              Name], a visionary designer and artist. In this thought-provoking
              article, we explore the seamless integration of artistry and
              design through the lens of [Your Name], a visionary designer and
              artist. In this thought-provoking article, we explore the seamless
              integration of artistry and design through the lens of [Your
              Name], a visionary designer and artist.
            </p>
            <p className='text-[24px] font-[500]'>
              In this thought-provoking article, we explore the seamless
              integration of artistry and design through the lens of [Your
              Name], a visionary designer and artist. In this thought-provoking
              article, we explore the seamless integration of artistry and
              design through the lens of [Your Name], a visionary designer and
              artist. In this thought-provoking article, we explore the seamless
              integration of artistry and design through the lens of [Your
              Name], a visionary designer and artist.
            </p>
          </div>
        </div>
        <div className='mt-[90px] flex justify-start items-start w-full'>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Article;
