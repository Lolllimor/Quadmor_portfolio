import { Button, Flex, Text } from "@mantine/core";
import { link } from "fs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdOpen } from "react-icons/io";

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

   const [size, setSize] = useState<number | undefined>(undefined);

   useEffect(() => {
     if (typeof window !== "undefined") {
       const handleResize = () => setSize(window.innerWidth);

       // Set the initial size
       handleResize();

       // Add event listener
       window.addEventListener("resize", handleResize);

       // Cleanup event listener on component unmount
       return () => {
         window.removeEventListener("resize", handleResize);
       };
     }
   }, []);

  return (
    <div className="mt-[32px] w-full max-[800px]:mt-[8px]">
      <div className="pb-[40px] max-[800px]:pb-[20px] max-[800px]: flex max-[800px]">
        <p className="text-white text-[24px] font-[500] max-[800px]:text-[12px]">
          SELECTED WORKS
        </p>
        <div className="flex">
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
      </div>
      <div className="flex gap-[88px] overflow-x-auto max-[800px]:gap-[22px]">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center w-[387px] h-[387px] max-[800px]:h-[196px] max-[800px]:w-[196px] hover:border-0 hover:rounded-[8px] border-[1px] max-[800px]:border-0 border-white"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            {size && size < 800 ? (
              <Flex className="justify-between h-full items-center flex-col">
                <img
                  src={item.imgSrc}
                  alt={`Image for ${item.name}`}
                  className="rounded-[8px] w-[387px] h-[285px] max-[800px]:!w-[196px] max-[800px]:!h-[143px]"
                />
                <Button
                  className="h-[56px] w-[133px] max-[800px]:h-[28px] max-[800px]:w-[67px] rounded-[37px] bg-white hover:bg-[#f0f0f0] flex justify-center "
                  onClick={() => {
                    push(`${item.link}`);
                  }}
                >
                  <div className="w-full flex items-center gap-[5px]">
                    <p className="text-[18px] font-[600] text-black max-[800px]:text-[8px]">
                      Open
                    </p>
                    <IoMdOpen
                      color="#000"
                      size={24}
                      className="max-[800px]:h-[12px]"
                    />
                  </div>
                </Button>
              </Flex>
            ) : !hoveredItems[idx] ? (
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
                  className="rounded-[8px] w-[387px] h-[285px] max-[800px]:w-[196px] max-[800px]:h-[144px]"
                />
                <Button
                  className="h-[56px] w-[133px] max-[800px]:h-[28px] max-[800px]:w-[67px] rounded-[37px] bg-white hover:bg-[#f0f0f0] flex justify-center "
                  onClick={() => {
                    push(`${item.link}`);
                  }}
                >
                  <div className="w-full flex items-center gap-[5px]">
                    <p className="text-[18px] font-[600] text-black max-[800px]:text-[8px]">
                      Open
                    </p>
                    <IoMdOpen
                      color="#000"
                      size={24}
                      className="max-[800px]:h-[12px]"
                    />
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
