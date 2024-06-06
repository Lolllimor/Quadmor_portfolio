import { Text } from "@mantine/core";

export const Footer = () => {
  return (
    <div className="p-[24px] flex flex-col w-full">
    <div className="flex justify-between h-[300px] border-b-[1px] border-white">
    <div className="flex gap-[160px]  h-[300px] ">
      <div className="flex flex-col gap-[8px]">
        <p className="text-[20px] font-[700] ">Quadri Morin</p>
        <p className="text-[16px] font-[500]"> Designer x Artist</p>
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="text-[20px] font-[700] ">Home</p>
        <p className="text-[16px] font-[500]"> Works</p>
        <p className="text-[16px] font-[500]"> Gallery</p>
        <p className="text-[16px] font-[500]"> Profile</p>
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="text-[20px] font-[700] ">Connect</p>
        <p className="text-[16px] font-[500]"> Download Resume</p>
        <p className="text-[16px] font-[500]"> Behance</p>
        <p className="text-[16px] font-[500]"> Dribble</p>
      </div>
    </div>
    <div className="gap-[24px] flex">
      <img height={32} width={32} className="max-h-[32px]" src='/images/insta.png'/>
      <img height={32} width={32} className="max-h-[32px]" src='/images/twit.png'/>
      <img height={32} width={32} className="max-h-[32px]" src='/images/link.png'/>
    </div>
    </div>
    <div className="flex gap-[8px] pt-[36px]">
      <img src="./images/copywright.png" className="max-h-[16px]" height={16} width={16}/>
      <p className="text-[12px] font-[500]">2024</p>
      <p className="text-[12px] font-[500]">Quadri Morin.</p>
      <p className="text-[12px] font-[500]">All right reserved.</p>

    </div>
    </div>
  );
};
