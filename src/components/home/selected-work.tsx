import { Button, Flex, Text } from "@mantine/core";
import { useState } from "react";
import { IoMdOpen } from "react-icons/io";

export const SelectedWork = () => {
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
    <div className="mt-[32px]">
      <div className="pb-[40px]">
        <Text className="text-white text-[24px] font-[500]">
          SELECTED WORKS
        </Text>
      </div>
      <div className="flex gap-[88px]">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center w-[387px] h-[285px] hover:border-0 hover:rounded-[8px] border-[1px] border-white"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            {!hoveredItems[idx] ? (
              <>
                <Text className="text-[20px] tracking-[1.4px] font-[500]">
                  {item.type.toUpperCase()}
                </Text>
                <div className="h-[1px] w-[10%] bg-white my-[13px] border-0"></div>
                <Text className="text-[24px] font-[500] ">{item.name}</Text>
              </>
            ) : (
              <Flex className='justify-between h-full items-center flex-col'>
                <img
                  src={item.imgSrc}
                  alt={`Image for ${item.name}`}
                  className="rounded-[8px] w-[387px] h-[285px]"
                />
                <Button className="h-[56px] w-[133px] rounded-[37px] bg-white">
                  <Text className="text-[16px] font-[600] text-black">
                    Open
                  </Text>
                  <IoMdOpen color="#000" size={24} />
                </Button>
              </Flex>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
