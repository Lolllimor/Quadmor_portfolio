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
    <div className="flex flex-col py-[100px] max-[1024px]:py-[80px] max-[768px]:py-[50px] max-[426px]:py-[30px]">
      <div className="flex gap-[50px] max-[1024px]:gap-[35px] max-[768px]:gap-[20px] max-[426px]:gap-[12px]">
        <div className="w-[90%] h-[442px] max-[425px]:h-fit bg-white max-[768px]:py-[30px] rounded-[48px] items-center px-[56px]   flex max-[425px]:w-[88%] max-[1024px]:py-[60px] max-[1024px]:px-[24px] max-[1024px]:h-fit max-[768px]:justify-between max-[426px]:flex-col-reverse max-[426px]:gap-[20px] max-[426px]:p-[24px] max-[426px]:w-[80%] max-[376px]:p-[16px] max-[376px]:gap-[10px]">
          <div className="flex flex-col max-[426px]:flex-col-reverse max-[376px]:gap-[15px]">
            <p className="text-[128px] max-[426px]:text-[50px] max-[425px]:leading-[19px] font-[600] text-black w-[50%] leading-none max-[1024px]:text-[80px] max-[768px]:text-[60px] max-[376px]:text-[40px]">
              MORIN
            </p>
            <p className="text-[128px] max-[426px]:text-[50px] max-[425px]:leading-[19px] font-[600] text-black w-[50%] leading-none max-[1024px]:text-[80px] max-[768px]:text-[60px] max-[376px]:text-[40px]">
              QUADRI
            </p>
          </div>
          <div className="flex w-[50%] max-[426px]:w-[100%] items-center max-[376px]:justify-center">
            <div className="w-[306px] h-[306px] rounded-full bg-black max-[425px]:w-[88%] max-[1024px]:w-[200px] max-[1024px]:h-[200px] max-[768px]:h-[180px] max-[768px]::w-[180px] max-[426px]:w-[140px] max-[426px]:h-[140px] max-[376px]:w-[120px] max-[376px]:h-[120px]"></div>
            <div className="ml-[-100px] w-[306px] h-[306px] rounded-full bg-black max-[425px]:w-[88%] max-[425px]:flex-col-reverse max-[1024px]:w-[200px] max-[1024px]:h-[200px] max-[1024px]:ml-[-50px] max-[768px]:h-[180px] max-[768px]::w-[180px] max-[768px]:ml-[-30px]  max-[426px]:w-[140px] max-[426px]:h-[140px] max-[376px]:w-[120px] max-[376px]:h-[120px]"></div>
          </div>
        </div>
        <div className="border border-white w-[10%]  rounded-[30px] max-[425px]:rounded-[20px] max-[1024px]:rounded-[25px] max-[768px]:rounded-[15px] max-[426px]:flex-1 max-[376px]:rounded-[10px]"></div>
      </div>
      <div className="h-[110px] flex gap-0 flex-col items-center w-full mb-[-12px] mt-[-10px] pl-[10vw]">
        <BiSolidDownArrow size={48} />
        <div className="h-[99px] w-[1px] border mt-[-7px] mb-[-10px] border-dashed"></div>
        <BiSolidUpArrow size={50} />
      </div>
      <div className="h-[486px] flex mb-[80px] max-[425px]:h-fit max-[426px]:flex-col-reverse max-[768px]:h-full max-[426px]:gap-[46px]  max-[376px]:gap-[16px] max-[376px]:mb-[40px] max-[1024px]:h-fit">
        <div className="w-[50%] gap-[60px] flex items-end h-full pl-[70px] max-[426px]:gap-[10px] max-[426px]:pl-0 max-[425px]:p-[24px] max-[425px]:w-[88%] max-[768px]:h-auto max-[1024px]:h-auto max-[1025px]:pl-0 max-[1024px]:w-[40%]">
          <img
            height={65}
            width={65}
            className="max-h-[65px] max-[425px]:h-[12px] max-[1024px]:h-[38px] max-[1024px]:w-[38px] max-[426px]:w-[24px] max-[426px]:h-[24px] max-[376px]:h-[16px] max-[376px]:w-[16px]"
            src="/images/insta.png"
          />
          <img
            height={65}
            width={65}
            className="max-h-[65px] max-[425px]:h-[12px] max-[1024px]:h-[40px] max-[1024px]:w-[40px] max-[426px]:w-[24px] max-[426px]:h-[24px]  max-[376px]:h-[16px] max-[376px]:w-[16px]"
            src="/images/twit.png"
          />
          <img
            height={65}
            width={65}
            className="max-h-[65px] max-[425px]:h-[12px] max-[1024px]:w-[40px] max-[1024px]:h-[40px] max-[426px]:w-[24px] max-[426px]:h-[24px]  max-[376px]:h-[16px] max-[376px]:w-[16px]"
            src="/images/link.png"
          />
        </div>
        <div className="w-[50%] bg-white h-full max-[1024px]:w-[60%] max-[1024px]:h-fit max-[768px]:h-fit rounded-[48px] max-[425px]:rounded-[25px] p-[50px] flex flex-col  items-center justify-center max-[425px]:w-[88%] max-[425px]:p-[24px] gap-[15px]  max-[768px]:p-[20px] max-[768px]:rounded-[18px] max-[426px]:w-[100%] max-[376px]:w-[100%] max-[376px]:rounded-[16px] max-[1024px]:p-[40px]">
          <p className="text-[20px] font-medium text-black h-full w-full leading-[36px] max-[425px]:text-[12px] max-[425px]:leading-[19px] max-[1024px]:text-[16px] max-[1024px]:leading-[25px] max-[768px]:text-[14px] max-[768px]:leading-[18px] max-[768px]:h-fit max-[1024px]:h-fit max-[426px]:text-[12px]">
            My passion for design traces back to my fascination with
            architecture. From an early age, I've been drawn to the process of
            creation, exploring various creative outlets.
          </p>
          <p className="text-[20px] font-medium text-black h-full max-[1024px]:h-fit max-[768px]:h-fit w-full leading-[36px] max-[425px]:text-[12px] max-[425px]:leading-[19px] max-[1024px]:text-[16px] max-[1024px]:leading-[25px]  max-[768px]:text-[14px] max-[768px]:leading-[18px]  max-[426px]:text-[12px]">
            Over the past six years, I've delved into the creative industry,
            wearing multiple hats as an Art Director, Graphic Designer, 3D
            Designer, and Illustrator. Currently, I serve as a Product Designer,
            driven by the desire to enhance user experiences and inspire fellow
            professionals in the field.
          </p>
          <p className="text-[20px] font-medium text-black h-full w-full max-[1024px]:h-fit leading-[36px] max-[425px]:text-[12px] max-[768px]:h-fit  max-[425px]:leading-[19px] max-[1024px]:text-[16px] max-[1024px]:leading-[25px]  max-[768px]:text-[14px] max-[768px]:leading-[18px] max-[426px]:text-[12px]">
            I am eager to contribute to making the world a better place through
            design innovation.
          </p>
        </div>
      </div>
      <div className="h-[216px] flex max-[425px]:h-fit max-[426px]: max-[768px]:h-fit max-[376px]:justify-between ">
        <div className="w-[35%] bg-[#F0FE6D] h-full rounded-[16px] z-10 max-[426px]:rounded-[10px] flex py-[35px] px-[18px] max-[1024px]:py-[25px] max-[768px]:py-[15px] max-[426px]:p-[10px] max-[376px]:p-[5px] max-[376px]:rounded-[5px]">
          <p className="font-[400] text-[24px] text-black max-[1024px]:text-[20px] max-[768px]:text-[14px] max-[426px]:text-[10px] max-[376px]:text-[7px]">
            Design Strategy has been a major part of my journey as an Art
            Director, Graphic Designer & Product Designer
          </p>
        </div>
        <div className="flex items-center justify-center h-full mt-[70px] max-[425px]:flex-col-reverse max-[768px]:mt-[97px] max-[426px]:mt-[80px] max-[376px]:mt-[20px] max-[376px]:w-fit max-[376px]:hidden">
          <BiSolidRightArrow
            size={32}
            className="ml-[-8px] max-[425px]:h-[12px] max-[768px]:h-[24px] max-[768px]:ml-[-10px] max-[426px]:h-[16px] max-[426px]:ml-[-12px] p-0 max-[376px]:h-[7px] max-[376px]:ml-[-16px]"
          />
          <div className="h-[1px] w-[111px] border border-dashed max-[1024px]:w-[55px] max-[768px]:w-[35px] max-[426px]:w-[20px] max-[376px]:w-[10px]"></div>
          <BiSolidLeftArrow
            size={32}
            className="mr-[-8px] max-[425px]:h-[12px] max-[425px]:flex-col-reverse max-[768px]:h-[24px] max-[768px]:mr-[-10px] max-[426px]:h-[16px] max-[426px]:mr-[-12px] max-[376px]:h-[7px] max-[376px]:mr-[-14px]"
          />
        </div>
        <div className="flex flex-col justify-between w-[60%]  max-[425px]:h-fit max-[376px]:h-auto">
          <div className="h-[88px] w-fit   border border-[#fff] rounded-[16px] max-[425px]:rounded-[25px] px-[44px] flex items-center justify-center   max-[1024px]:px-[22px] max-[768px]:px-[12px] max-[768px]:h-[48px] max-[768px]:rounded-[10px] max-[426px]:py-[5px] max-[426px]:rounded-[5px] max-[426px]:px-[8px] max-[376px]:h-[16px] max-[376px]:rounded-[5px] ">
            <p className="text-[20px] font-[600] max-[1024px]:text-[18px] max-[768px]:text-[12px] max-[426px]:text-[10px]  max-[376px]:text-[5px]">
              My love for movies is also a worthy mention.
            </p>
          </div>
          <div className="h-[88px] w-full border border-[#fff] rounded-[16px] max-[425px]:rounded-[25px] px-[36px] max-[768px]:flex  max-[768px]:items-center py-[26px] max-[1024px]:h-fit max-[1024px]:py-[16px] max-[768px]:px-[12px] max-[768px]:h-[48px] max-[768px]:rounded-[10px] max-[426px]:rounded-[5px] max-[426px]:px-[8px] max-[426px]:py-[2px] max-[376px]:h-[16px] max-[376px]:rounded-[5px] ">
            <p className="text-[24px] font-[700] max-[1024px]:text-[20px] max-[768px]:text-[14px] max-[426px]:text-[10px] max-[376px]:text-[6px]">
              Shoot me an email via{" "}
              <span className="text-[#F0FE6D]">Quadmor@hotmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <hr className="border border-dashed mt-[100px]" />
      </div>
    </div>
  );
};

export default Profile;
