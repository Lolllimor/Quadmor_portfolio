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
  return (
    <div className="group border-[1px] border-white group max-[800px]:p-[12px] rounded-[24px] cursor-pointer max-[800px]:min-w-[122px] max-[800px]:h-[162px] max-[800px]:rounded-[12px]  min-w-[235px]  h-[312px] p-[24px] justify-between flex flex-col overflow-hidden relative">
      <div className="group-hover:hidden transition-opacity duration-500 ease-in-out ">
        <img
          src={imageSrc}
          width="48px"
          height="48px"
          className="max-[800px]:w-[46px] max-[800px]:h-[46px]"
          alt={toolName}
        />
      </div>

      <Text
        className={`text-[20px] group-hover:hidden max-[800px]:text-[12px] hover:opacity-25 transition-opacity duration-500 ease-in-out font-[500] text-white text-left ${"hover:opacity-25"}`}
      >
        {toolName}
      </Text>

      <div className="hidden group-hover:flex flex-col justify-between h-full">
        <img src={colImage} width="88px" height="88px" alt={toolName} />
        <Flex className="flex-col ">
          <Flex className="">
            <StarRating value={stars} totalStars={5} />
          </Flex>
          <p className="text-[20px] font-[500]">{noOfYears}+ Years</p>
        </Flex>
      </div>
    </div>
  );
};
