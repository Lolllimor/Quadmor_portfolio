import StarRating from "@/home/star-rating";
import { Flex, Text } from "@mantine/core";
import { ReactNode, useState } from "react";
import { Rating } from "react-simple-star-rating";

export const ToolsCard = ({
  imageSrc,
  toolName,
  colImage,
  noOfYears,
  starImg,
  stars,
}: {
  imageSrc: string;
  toolName: string;
  colImage: string;
  noOfYears: string;
  stars: number;
  starImg: string;
}) => {
  const [hovered, isHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => isHovered(true)}
      onMouseLeave={() => isHovered(false)}
      className="group border-[1px] border-white rounded-[24px] cursor-pointer min-w-[235px] w-[px] h-[312px] p-[24px] justify-between flex flex-col overflow-hidden relative"
    >
      {hovered ? (
        <>
          <img src={colImage} width="88px" height="88px" alt={toolName} />
          <Flex className="flex-col ">
            <Flex className="">
              <StarRating value={stars} totalStars={5} />
            </Flex>
            <Text className="text-[20px] font-[500]">{noOfYears}+ Years</Text>
          </Flex>
        </>
      ) : (
        <>
          <img src={imageSrc} width="48px" height="48px" alt={toolName} />

          <Text
            className={`text-[20px] font-[500] text-white text-left ${
              hovered && "hover:opacity-25"
            }`}
          >
            {toolName}
          </Text>
        </>
      )}
    </div>
  );
};
