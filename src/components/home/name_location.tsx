import { Text } from "@mantine/core";

export const NameLoca = () => {
  return (
    <div className="h-[618px] flex gap-[10%] justify-between items-end  pb-[88px] border-b-[1px] border-white ">
      <div className="flex gap-[32px] flex-col">
        <Text className="text-[128px] font-[500] leading-none p-0">QUADRI</Text>
        <Text className="text-[149px] font-[500] leading-none p-0"> MORIN</Text>
      </div>
      <div className="justify-left w-full flex ">
        <Text className="text-[24px] font-[500] p-0">Lagos, Nigeria.</Text>
      </div>
    </div>
  );
};
