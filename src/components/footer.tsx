import { Text } from "@mantine/core";

export const Footer = () => {
  return (
    <div className="p-[24px] max-[800px]:p-0 flex flex-col w-full h-full max-[800px]:mb-[20px]">
      <div className="flex  max-[800px]:flex-col justify-between h-[300px] max-[800px]:h-full max-[800px]:gap-[24px] max-[800px]:pb-[40px] border-b-[1px] border-white">
        <div className="flex gap-[160px] max-[800px]:gap-6 max-[800px]:flex-col max-[800px]:h-fit h-[300px] ">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[20px] font-[700] max-[800px]:text-[16px] ">
              Quadri Morin
            </p>
            <p className="text-[16px] font-[500] max-[800px]:text-[12px]">
              Designer x Artist
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[20px] font-[700] max-[800px]:text-[16px]">
              Home
            </p>
            <p className="text-[16px] font-[500] max-[800px]:text-[12px]">
              Works
            </p>
            <p className="text-[16px] font-[500] max-[800px]:text-[12px]">
              Gallery
            </p>
            <p className="text-[16px] font-[500] max-[800px]:text-[12px]">
              Profile
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[20px] font-[700] max-[800px]:text-[16px]">
              Connect
            </p>
            <p className="text-[16px] font-[500] max-[800px]:text-[12px]">
              Download Resume
            </p>
            <p className="text-[16px] font-[500] max-[800px]:text-[12px]">
              Behance
            </p>
            <p className="text-[16px] font-[500] max-[800px]:text-[12px]">
              Dribble
            </p>
          </div>
        </div>
        <div className="gap-[24px] flex">
          <img
            className="max-h-[32px] max-[800px]:h-[25px]"
            src="/images/insta.png"
          />
          <img
            className="max-h-[32px] max-[800px]:h-[25px]"
            src="/images/twit.png"
          />
          <img
            className="max-h-[32px] max-[800px]:h-[25px]"
            src="/images/link.png"
          />
        </div>
      </div>
      <div className="flex gap-[8px] pt-[36px] max-[800px]:hidden ">
        <img
          src="./images/copywright.png"
          className="max-h-[16px]"
          height={16}
          width={16}
        />
        <p className="text-[12px] font-[500]">2024</p>
        <p className="text-[12px] font-[500]">Quadri Morin.</p>
        <p className="text-[12px] font-[500]">All right reserved.</p>
      </div>
    </div>
  );
};
