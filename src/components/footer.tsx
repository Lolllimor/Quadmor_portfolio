import { Text } from "@mantine/core";

export const Footer = () => {
  return (
    <div className="p-[24px] flex flex-col">
    <div className="flex justify-between h-[300px] border-b-[1px] border-white">
    <div className="flex gap-[160px]  h-[300px] ">
      <div className="flex flex-col gap-[8px]">
        <Text className="text-[20px] font-[700] ">Quadri Morin</Text>
        <Text className="text-[16px] font-[500]"> Designer x Artist</Text>
      </div>
      <div className="flex flex-col gap-[8px]">
        <Text className="text-[20px] font-[700] ">Home</Text>
        <Text className="text-[16px] font-[500]"> Works</Text>
        <Text className="text-[16px] font-[500]"> Gallery</Text>
        <Text className="text-[16px] font-[500]"> Profile</Text>
      </div>
      <div className="flex flex-col gap-[8px]">
        <Text className="text-[20px] font-[700] ">Connect</Text>
        <Text className="text-[16px] font-[500]"> Download Resume</Text>
        <Text className="text-[16px] font-[500]"> Behance</Text>
        <Text className="text-[16px] font-[500]"> Dribble</Text>
      </div>
    </div>
    <div className="gap-[24px] flex">
      <img height={32} width={32} className="max-h-[32px]" src='./images/insta.png'/>
      <img height={32} width={32} className="max-h-[32px]" src='./images/twit.png'/>
      <img height={32} width={32} className="max-h-[32px]" src='./images/link.png'/>
    </div>
    </div>
    <div className="flex gap-[8px] pt-[36px]">
      <img src="./images/copywright.png" className="max-h-[16px]" height={16} width={16}/>
      <Text className="text-[12px] font-[500]">2024</Text>
      <Text className="text-[12px] font-[500]">Quadri Morin.</Text>
      <Text className="text-[12px] font-[500]">All right reserved.</Text>

    </div>
    </div>
  );
};
