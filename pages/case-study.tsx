import { Button, Flex, Text } from "@mantine/core";
import React, { useState } from "react";
import { IoMdOpen } from "react-icons/io";

const CaseStudy = () => {
  const data = [
    {
      type: "App Redesign 2024 ",
      name: "Pouchii Redesign",
      imgSrc: "./images/pouchii.png",
    },
    {
      type: "COVERLY 2021",
      name: "Cover Letter Generator",
      imgSrc: "./images/coverly.png",
    },
    {
      type: "ART COLLECTION 2023",
      name: "God’s Eye",
      imgSrc: "./images/hand.png",
    },
    {
      type: "App Redesign 2024 ",
      name: "Pouchii Redesign",
      imgSrc: "./images/pouchii.png",
    },
    {
      type: "COVERLY 2021",
      name: "Cover Letter Generator",
      imgSrc: "./images/coverly.png",
    },
    {
      type: "ART COLLECTION 2023",
      name: "God’s Eye",
      imgSrc: "./images/hand.png",
    },
    {
      type: "App Redesign 2024 ",
      name: "Pouchii Redesign",
      imgSrc: "./images/pouchii.png",
    },
    {
      type: "COVERLY 2021",
      name: "Cover Letter Generator",
      imgSrc: "./images/coverly.png",
    },
    {
      type: "ART COLLECTION 2023",
      name: "God’s Eye",
      imgSrc: "./images/hand.png",
    },
  ];

  const [hoveredItems, setHoveredItems] = useState(
    Array(data.length).fill(false)
  );

  const handleMouseEnter = (index: number) => {
    setHoveredItems((prev) => {
      prev[index] = true;
      return [...prev];
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredItems((prev) => {
      prev[index] = false;
      return [...prev];
    });
  };
  return (
    <Flex className="flex pt-[60px] gap-[88px] pb-[248px] flex-wrap">
      {data.map((item, idx) => (
        <div
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
        >
          {!hoveredItems[idx] ? (
            <img
              key={idx}
              src={item.imgSrc}
              alt={`Image for ${item.name}`}
              className="rounded-[8px] w-[387px] h-[285px]"
            />
          ) : (
            <div className=' flex  justify-center gap-[24px] h-[285px] items-center flex-col border-[1px] w-[387px]  border-white rounded-[8px] '>
              <div className="flex flex-col justify-center items-center" >
                <Text className="text-[20px] tracking-[1.4px] font-[500]">
                  {item.type.toUpperCase()}
                </Text>
                <div className="h-[1px] w-[10%] bg-white my-[13px] border-0"></div>
                <Text className="text-[24px] font-[500] ">{item.name}</Text>
              </div>
              <Button className="h-[56px] w-[133px] rounded-[37px] bg-white ">
								<div className="items-center justify-center flex gap-[5px]">
                <Text className="text-[16px] font-[600] text-black">Open</Text>
                <IoMdOpen color="#000" size={24} />
								</div>
              </Button>
            </div>
          )}
        </div>
      ))}
    </Flex>
  );
};

export default CaseStudy;
