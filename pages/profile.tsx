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
    <div className="flex flex-col py-[100px] max-[800px]:py-[50px]">
      <div className="flex gap-[50px] max-[800px]:gap-[8px]">
        <div className="w-[90%] h-[442px] max-[800px]:h-fit max-[800px]:py-[30px] bg-white rounded-[48px] items-center px-[56px] max-[800px]:px-[16px] max-[800px]:flex-col-reverse flex max-[800px]:w-[88%] max-[800px]:gap-[27px]">
          <div className="flex flex-col max-[800px]:flex-col-reverse">
            <p className="text-[128px]  max-[800px]:text-[60px] font-[600] text-black w-[50%] leading-none">
              MORIN
            </p>
            <p className="text-[128px] max-[800px]:text-[60px] font-[600] text-black w-[50%] leading-none">
              QUADRI
            </p>
          </div>
          <div className="flex w-[50%] max-[800px]:w-full items-center">
            <div className="w-[306px] h-[306px] rounded-full bg-black max-[800px]:w-[150px] max-[800px]:h-[150px]"></div>
            <div className="ml-[-100px] w-[306px] h-[306px] rounded-full bg-black max-[800px]:w-[150px] max-[800px]:h-[150px] max-[800px]:ml-[-50px]"></div>
          </div>
        </div>
        <div className="border border-white w-[10%] rounded-[48px] max-[800px]:rounded-[21px]"></div>
      </div>
      <div className="h-[110px] flex gap-0 flex-col items-center w-full mb-[-12px] mt-[-10px] pl-[10vw]">
        <BiSolidDownArrow size={48} />
        <div className="h-[99px] w-[1px] border mt-[-7px] mb-[-10px] border-l-[2px] border-dashed"></div>
        <BiSolidUpArrow size={50} />
      </div>
      <div className="h-[486px] flex mb-[80px] max-[800px]:mb-[18px] max-[800px]:h-fit max-[800px]:flex-col-reverse ">
        <div className="w-[50%] gap-[60px] flex items-end h-full pl-[70px] max-[800px]:gap-[15px]  max-[800px]:pt-[48px] max-[800px]:items-start max-[800px]:pl-0">
          <img
            height={65}
            width={65}
            className="max-h-[65px] max-[800px]:w-[24px] max-[800px]:h-[24px]"
            src="/images/insta.png"
          />
          <img
            height={65}
            width={65}
            className="max-h-[65px] max-[800px]:w-[24px] max-[800px]:h-[24px]"
            src="/images/twit.png"
          />
          <img
            height={65}
            width={65}
            className="max-h-[65px] max-[800px]:w-[24px] max-[800px]:h-[24px]"
            src="/images/link.png"
          />
        </div>
        <div className="w-[50%] bg-white h-full rounded-[48px] max-[800px]:rounded-[25px] p-[50px] flex max-[800px]:flex-col  items-center justify-center max-[800px]:w-full max-[800px]:p-[24px] max-[800px]:gap-[10px]">
          <p className="text-[20px] font-medium text-black h-full w-full leading-[36px] max-[800px]:text-[12px]  max-[800px]:leading-[19px]">
            My passion for design traces back to my fascination with
            architecture. From an early age, I've been drawn to the process of
            creation, exploring various creative outlets.
          </p>
          <p className="text-[20px] font-medium text-black h-full w-full leading-[36px] max-[800px]:text-[12px] max-[800px]:leading-[19px]">
            Over the past six years, I've delved into the creative industry,
            wearing multiple hats as an Art Director, Graphic Designer, 3D
            Designer, and Illustrator. Currently, I serve as a Product Designer,
            driven by the desire to enhance user experiences and inspire fellow
            professionals in the field.
          </p>
          <p className="text-[20px] font-medium text-black h-full w-full leading-[36px] max-[800px]:text-[12px] max-[800px]:leading-[19px]">
            I am eager to contribute to making the world a better place through
            design innovation.
          </p>
        </div>
      </div>
      <div className="h-[216px] flex max-[800px]:h-[61px] max-[800px]:items-center ">
        <div className="w-[35%] bg-[#F0FE6D] h-full rounded-[16px] z-10 max-[800px]:rounded-[4px] max-[800px]:w-[40%]"></div>
        <div className="flex items-center justify-center h-full mt-[70px] max-[800px]:mt-10">
          <BiSolidRightArrow
            size={32}
            className="ml-[-8px] max-[800px]:h-[12px] max-[800px]:mr-[-6px]"
          />
          <div className="h-[1px] w-full border border-l-[2px] border-dashed "></div>
          <BiSolidLeftArrow
            size={32}
            className="mr-[-8px] max-[800px]:h-[12px] max-[800px]:mr-[-6px]"
          />
        </div>
        <div className="flex flex-col justify-between w-[65%] max-[800px]:gap-[11px] max-[800px]:h-full">
          <div className="h-[88px] w-full border border-[#fff] rounded-[16px] max-[800px]:h-full max-[800px]:rounded-[4px]"></div>
          <div className="h-[88px] w-full border border-[#fff] rounded-[16px] max-[800px]:h-full max-[800px]:rounded-[4px]"></div>
        </div>
      </div>
      <div>
        <hr className="border border-dashed mt-[100px]" />
      </div>
    </div>
  );
};

export default Profile;
