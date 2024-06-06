import { Footer } from "@/footer";
import { useRouter } from "next/router";
import React from "react";
import {
  BiSolidDownArrow,
  BiSolidLeftArrow,
  BiSolidRightArrow,
  BiSolidUpArrow,
} from "react-icons/bi";

const Profile = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div className='pt-[100px]  flex flex-col pb-[100px]'>
      <div className='flex gap-[50px]'>
        <div className='w-[90%] h-[442px] bg-white rounded-[48px] items-center px-[56px] flex'>
          <p className='text-[128px] font-[600] text-black w-[50%] leading-none'>
            MORIN QUADRI
          </p>
          <div className='flex w-[50%] items-center'>
            <div className='w-[306px] h-[306px] rounded-full bg-black'></div>
            <div className='ml-[-100px] w-[306px] h-[306px] rounded-full bg-black'></div>
          </div>
        </div>
        <div className='border border-white w-[10%] rounded-[48px] '></div>
      </div>
      <div className='h-[110px] flex gap-0 flex-col items-center w-full mb-[-12px] mt-[-10px] pl-[10vw]'>
        <BiSolidDownArrow size={48} />
        <div className='h-[99px] w-[1px] border mt-[-7px] mb-[-10px] border-l-[2px] border-dashed'></div>
        <BiSolidUpArrow size={50} />
      </div>
      <div className='h-[486px] flex mb-[80px]'>
        <div className='w-[50%] gap-[60px] flex items-end h-full pl-[70px]'>
          <img
            height={65}
            width={65}
            className='max-h-[65px]'
            src='/images/insta.png'
          />
          <img
            height={65}
            width={65}
            className='max-h-[65px]'
            src='/images/twit.png'
          />
          <img
            height={65}
            width={65}
            className='max-h-[65px]'
            src='/images/link.png'
          />
        </div>
        <div className='w-[50%] bg-white h-full rounded-[48px] p-[50px] flex items-center justify-center'>
          <p className='text-[20px] font-[500] text-black h-full w-full leading-[36px]'>
            In this thought-provoking article, we explore the seamless
            integration of artistry and design through the lens of [Your Name],
            a visionary designer and artist. In this thought-provoking article,
            we explore the seamless integration of artistry and design through
            the lens of [Your Name], a visionary designer and artist. In this
            thought-provoking article, we explore the seamless integration of
            artistry and design through the lens of [Your Name], a visionary
            designer and artist. In this thought-provoking article, we explore
            the seamless integration of artistry and design through the.
          </p>
        </div>
      </div>
      <div className='h-[216px]  flex  '>
        <div className='w-[35%] bg-[#F0FE6D] h-full rounded-[16px] z-10'></div>
        <div className='flex items-center justify-center h-full mt-[70px]'>
          <BiSolidRightArrow size={32} className='ml-[-8px]' />
          <div className='h-[1px] w-[111px] border border-l-[2px] border-dashed '></div>
          <BiSolidLeftArrow size={32} className='mr-[-8px]' />
        </div>
        <div className='flex flex-col justify-between w-[65%]'>
          <div className='h-[88px] w-full border border-[#fff] rounded-[16px]'></div>
          <div className='h-[88px] w-full border border-[#fff] rounded-[16px]'></div>
        </div>
      </div>
      <div>
        <hr className='border border-dashed mt-[100px]' />
      </div>
    </div>
  );
};

export default Profile;
