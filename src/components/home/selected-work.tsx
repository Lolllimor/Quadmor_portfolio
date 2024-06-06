import { Button, Flex, Text } from "@mantine/core";
import { link } from "fs";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdOpen } from "react-icons/io";

export const SelectedWork = () => {
  const { back, push } = useRouter();
  const data = [
    {
      type: "App Redesign 2024 ",
      name: "Pouchii Redesign",
      imgSrc: "./images/pouchii.png",
      link: "https://www.behance.net/gallery/188111073/Pouchii-Redesign",
    },
    {
      type: "COVERLY 2021",
      name: "Cover Letter Generator",
      imgSrc: "./images/coverly.png",
      link: "https://www.behance.net/gallery/170646061/Cover-Letter-generator-Case-Study",
    },
    {
      type: "ART COLLECTION 2023",
      name: "God’s Eye",
      imgSrc: "./images/hand.png",
      link: "https://www.behance.net/gallery/185031767/Gods-Eye",
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
        <p className="text-white text-[24px] font-[500]">SELECTED WORKS</p>
      </div>
      <div className="flex gap-[88px]">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center w-[387px] h-[387px]  hover:border-0 hover:rounded-[8px] border-[1px] border-white"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            {!hoveredItems[idx] ? (
              <>
                <p className="text-[20px] tracking-[1.4px] font-[500] w-full text-center px-[5px]">
                  {item.type.toUpperCase()}
                </p>
                <div className="h-[1px] w-[10%] bg-white my-[13px] border-0"></div>
                <p className="text-[24px] font-[500]w-full text-center px-[5px]">
                  {item.name}
                </p>
              </>
            ) : (
              <Flex className="justify-between h-full items-center flex-col">
                <img
                  src={item.imgSrc}
                  alt={`Image for ${item.name}`}
                  className="rounded-[8px] w-[387px] h-[285px]"
                />
                <Button
                  className="h-[56px] w-[133px] rounded-[37px] bg-white hover:bg-[#f0f0f0] flex justify-center "
                  onClick={() => {
                    push(`${item.link}`);
                  }}
                >
                  <div className="w-full flex items-center gap-[5px]">
                    <p className="text-[18px] font-[600] text-black">Open</p>
                    <IoMdOpen color="#000" size={24} />
                  </div>
                </Button>
              </Flex>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
