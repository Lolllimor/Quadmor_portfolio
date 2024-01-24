import { Text } from "@mantine/core";
import { IoMdOpen } from "react-icons/io";

export const Occupations = () => {
  return (
    <div className="h-[715px] flex  justify-between items-end py-[80px] border-y-[1px] border-white ">
      <div className="w-[50%] flex justify-between items-start h-full pr-[28px]  ">
        <Text className="text-[24px] font-[500]">What I do</Text>
        <IoMdOpen color="#fff" size={40} />
      </div>
      <div className="w-[1px] h-full border-0 bg-white"></div>
      <div className="flex flex-col h-full w-full pl-[45px]">
        <div className="flex flex-row w-[100%] justify-evenly ">
          <div className="flex flex-col gap-[24px] h-[50%] pr-[30px] w-fit">
            <Text className="text-[32px] font-[600]">Digital Design</Text>
            <Text className="text-[20px] font-[300] ">
              Passionate designer and artist specializing in [mention your
              specific design focus, e.g., graphic design, UI/UX].
            </Text>
          </div>
          <div className=" flex h-full items-center">
            <div className="border-none bg-white w-[1px] h-[70%] "></div>
          </div>
          <div className="flex flex-col gap-[24px] h-[50%] pl-[30px]">
            <Text className="text-[32px] font-[600]">Art Direction</Text>
            <Text className="text-[20px] font-[300] w-[80%]">
              Passionate designer and artist specializing in [mention your
              specific design focus, e.g., graphic design, UI/UX].
            </Text>
          </div>
        </div>
        <div className=" flex w-full justify-center">
        <div className="h-[1px] w-[100%] bg-white my-[66px]"></div>
          </div>
        <div className="flex flex-row w-[100%] justify-evenly">
          <div className=" flex flex-col gap-[24px] h-[50%] pr-[30px] w-fit">
            <Text className="text-[32px] font-[600]">Illustration</Text>
            <Text className="text-[20px] font-[300] ">
              Passionate designer and artist specializing in [mention your
              specific design focus, e.g., graphic design, UI/UX].
            </Text>
          </div>
          <div className="h-full items-center flex" >
            <div className="border-none bg-white w-[1px] h-[70%] "></div>
          </div>
          <div className="flex flex-col gap-[24px] h-[50%] pl-[30px]">
            <Text className="text-[32px] font-[600]">Interaction Design</Text>
            <Text className="text-[20px] font-[300] w-[80%]">
              Passionate designer and artist specializing in [mention your
              specific design focus, e.g., graphic design, UI/UX].
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
