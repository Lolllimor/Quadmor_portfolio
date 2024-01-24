import { Flex, Text } from "@mantine/core";

export const GalleryCard = ({
  name,
  month,
  year,
  ImageSrc,
  classname,
}: {
  ImageSrc: string;
  classname?: string;
  name: string
  month: string
  year: string
}) => {
  return (
    <div
      className={`min-w-[443px] w-[443px] h-[624px] brightness-50 relative hover:brightness-100 flex  contain rounded-[24px] overflow-hidden transition-transform transform hover:z-20 hover:border-white hover:border-[2px] ${classname}`}
    >
      <img src={ImageSrc} className="rounded-[24px] object-cover w-full" />
      <Flex className="flex-col absolute bottom-[30px] left-[30px]">
        <Text className="text-[16px] font-[500 ]">{name}</Text>
      <Text className="text-[12px] font-[700]">{month}, {year}</Text>
      </Flex>
    </div>
  );
};