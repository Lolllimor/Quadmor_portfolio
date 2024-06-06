
import { IoMdOpen } from "react-icons/io";

export const  Occupations = () => {
  return (
    <div className="flex justify-between max-[800px]:py-[40px]  max-[800px]:flex-col max-[800px]:gap-[30px] max-[800px]:items-start items-end py-[80px] border-y-[1px] border-white h-full">
      <div className="w-[50%] flex justify-between  max-[800px]:border-r-0  items-start h-full pr-[28px] border-r border-white ">
        <p className="text-[24px] max-[800px]:text-[12px] font-[500]">
          What I do
        </p>
        <IoMdOpen color="#fff" size={40} className="max-[800px]:hidden" />
      </div>
      <div className="w-[1px] h-full border-0 bg-white "></div>
      <div className="flex flex-col h-full w-full pl-[45px] max-[800px]:pl-0">
        <div className="grid grid-cols-2  w-[100%] justify-evenly ">
          <div className="flex flex-col gap-[24px] pr-[20px]  border-r border-white max-[800px]:pr-[8px]">
            <p className="text-[32px] font-[600] max-[800px]:text-[16px]">
              Digital Design
            </p>
            <p className="text-[20px] font-[300] max-[800px]:text-[10px]">
              Crafting captivating digital experiences through creative design
              and technical expertise. One product at a time.
            </p>
          </div>

          <div className="flex flex-col gap-[24px]  pl-[50px] max-[800px]:pl-[20px]">
            <p className="text-[32px] font-[600] max-[800px]:text-[16px]">
              Art Direction
            </p>
            <p className="text-[20px] font-[300] w-[80%] max-[800px]:text-[10px]">
              Guiding visual storytelling with precision and flair. I elevate
              brands through artful visual style & communication.
            </p>
          </div>
        </div>
        <div className=" flex w-full justify-center">
          <div className="h-[1px] w-[100%] bg-white my-[66px] max-[800px]:my-[32px]"></div>
        </div>
        <div className="grid grid-cols-2 w-[100%] justify-evenly">
          <div className=" flex flex-col gap-[24px] pr-[20px] max-[800px]:pr-[8px]  border-r border-white">
            <p className="text-[32px] font-[600] max-[800px]:text-[16px]">
              Illustration
            </p>
            <p className="text-[20px] font-[300] max-[800px]:text-[10px]">
              Transforming ideas & stories into vibrant digital masterpieces.
              Illustrating narratives with creativity and precision.
            </p>
          </div>
          <div className="flex flex-col gap-[24px]  pl-[50px] max-[800px]:pl-[20px] ">
            <p className="text-[32px] font-[600] max-[800px]:text-[16px]">
              Interaction Design
            </p>
            <p className="text-[20px] font-[300] w-[80%] max-[800px]:text-[10px]">
              Fostering design excellence through leadership and mentorship,
              guiding aspiring designers toward their fullest potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};