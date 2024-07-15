import { Footer } from "@/footer";
import { Navbar } from "@/navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

const SubWork = () => {
  const { back, push, query } = useRouter();

  const graphics = [
    {
      title: "TWISCO Out of Home Ads",
      paragraph:
        "The campaign theme for this project was “Power your Dreams”, and the designs where created to resonate the copies associated with them, while still emphasizing on the theme that parent can help their children power their dream.",
      img: "/images/twisco.png",
      link: "https://drive.google.com/file/d/1WtuOn7CySIaIxyo8tKIEQ1oESmuy-4kg/view?usp=sharing",
    },
    {
      title: "PRAMIE GENT SALON",
      paragraph:
        "I served as the Art Director for Pramie Gent Salon during which I provided visual guide & direction that expressed the luxurious identity of the brand. I provided multiple  marketing designs, brand asset & messaging strategies for the brand. Here are a few...",
      img: "/images/praime.png",
      link: "https://drive.google.com/file/d/1TRzeHMKpf1FabZiILpmUozCiHmeTEcL5/view?usp=sharing",
    },
    {
      title: "NEW AGE Out of Home Ads",
      paragraph:
        "New Age known for providing Phone Chargers and Ear Accessories came to us with the goal of helping them introduce their new EarPod Products to the market. The designs and copy focused on highlighting the features of the product, and the kind of experience that comes with using them.",
      img: "/images/new_age.png",
      link: "https://drive.google.com/file/d/1OdpCS8WDFr_F8CeW3h8qMwLOhfjr2K2L/view?usp=sharing",
    },
    {
      title: "CHAMDOR WINE  ",
      paragraph:
        "Chamdor wine wanted remind their audience about how inclusive they are, and how their product fits perfectly for more than one celebratory Occassion. These designs were made to go with “love” events happening in the first quarter of the year. ",
      img: "/images/chamdor.png",
      link: "https://drive.google.com/file/d/1q9o7XNc3a-aTvbIOuGjnTJTKHvsvQ0T4/view?usp=sharing",
    },
    {
      title: "JINJER & MANGO SOCIAL DESIGN",
      paragraph:
        "These are social media designs for an imaginary fintech brand. ",
      img: "/images/jinjer.png",
      link: "https://drive.google.com/file/d/1DztRKkmEBAds1ykT0ePJz0EKgFFRQnC1/view?usp=sharing",
    },
    {
      title: "1940 BEER LAGER",
      paragraph:
        "These are marketing materials for a psedo beer brand. The Product and Packaging was created by a friend, after which I worked on these marketing designs. The scenes used were from the movies; “The harder they fall” and “Django Unchained”",
      img: "/images/lager.png",
      link: "https://www.behance.net/gallery/136876875/1940-Premium-Lager",
    },
  ];

  const ui = [
    { name: "Pouchii Redesign", imgSrc: "/images/pouchii_full.png" },
    {
      name: "COVERLY - A Cover Letter Generator",
      imgSrc: "/images/coverly_full.png",
    },
    {
      name: "Fintech Product Admin Dashboard Redesign",
      imgSrc: "",
    },
    {
      name: "Fundraising Website Redesign",
      imgSrc: "",
    },
  ];
  const illustrate = [
    {
      title: "GOD’S EYE PROJECT",
      paragraph:
        "God’s Eye is a collection of  five art pieces, each of which presents a unique perspective on success stories from an aerial view. ",
      img: "./images/hand.png",
      link: "https://www.behance.net/gallery/185031767/Gods-Eye",
    },
  ];

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
    <>
      <main className="px-[88px] pt-[36px] flex flex-col items-center ">
        <Navbar />
        <div className="flex py-[30px] w-full justify-start max-[480px]:py-[15px]">
          <p
            className="cursor-pointer max-[480px]:text-[12px]"
            onClick={() => {
              back();
            }}
          >
            Works
          </p>
          <div className="flex gap-2 pl-2 items-center">
            <IoIosArrowForward
              size="12"
              color="#fff"
              className="max-[480px]:w-[10px]"
            />
            <p className="max-[480px]:text-[10px]">{query.works}</p>
          </div>
        </div>
        {size && size < 650 ? (
          <div className="grid grid-cols-2 justify-evenly max-[433px]:flex max-[433px]:flex-col  ">
            {query.works === "Graphics Design" &&
              graphics.map((item, idx) => (
                <div className="mb-[20px] max-[480px]:mb-[10px] flex flex-col gap-[10px]  items-center ">
                  <div className="rounded-[16px] border  border-white w-fit h-fit max-[610px]:rounded-[12px] max-[565px]:rounded-[10px]">
                    <img
                      className="  rounded-[16px] w-[200px] h-[200px] max-[610px]:w-[180px] max-[610px]:h-[180px] max-[610px]:rounded-[12px] max-[565px]:w-[150px] max-[565px]:h-[150px] max-[565px]:rounded-[10px] max-[480px]:h-[120px] max-[480px]:w-[120px]"
                      src={item.img}
                    />
                  </div>
                  <p className="text-[14px] font-[700] text-wrap w-[200px] max-[610px]:w-[180px] max-[565px]:text-[12px] max-[565px]:w-[150px] text-center max-[480px]:text-[10px]">
                    {item.title}
                  </p>
                </div>
              ))}
          </div>
        ) : (
          <div className="flex flex-col gap-[48px] w-full pt-[40px]">
            {query.works === "Graphics Design"
              ? graphics.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full border border-[#fff] rounded-[80px] p-[50px] flex gap-[50px] max-[1024px]::p-[35px] max-[1024px]:rounded-[50px] max-[905px]:rounded-[40px] max-[905px]:p-[25px]"
                  >
                    <div className="flex flex-col justify-between w-full">
                      <p className="pb-[16px] text-[48px] font-[700] max-[1024px]:text-[24px] max-[1024px]:pb-[12px] max-[905px]:pb-[8px] max-[905px]:text-[16px]">
                        {item.title}
                      </p>
                      <div className="flex gap-[20px] flex-col">
                        <p className="text-[20px] font-[500] max-[1024px]:text-[16px] max-[905px]:text-[12px]">
                          {item.paragraph}
                        </p>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-[8px] cursor-pointer"
                        >
                          <p className="font-[600] text-[24px] max-[1024px]:text-[16px] max-[905px]:text-[12px]">
                            Open
                          </p>
                          <CiShare1
                            color="#fff"
                            size={24}
                            className="max-[1024px]:w-[16px] max-[905px]:w-[14px]"
                          />
                        </a>
                      </div>
                    </div>
                    <img
                      className="w-[280px] h-[280px] rounded-[40px] max-[1024px]:w-[240px] max-[1024px]:h-[240px] max-[1024px]:rounded-[24px] max-[905px]:rounded-[16px] max-[905px]:w-[200px] max-[905px]:h-[200px]"
                      src={item.img}
                    />
                  </div>
                ))
              : query.works === "UI / UX Design"
              ? ui.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full flex flex-col gap-[30px] mt-[10px]"
                  >
                    <p className="font-[700] text-[24px] leading-[29px]">
                      {item.name}
                    </p>
                    <div className="w-full h-[370px] overflow-hidden rounded-[185px] ">
                      <img
                        src={item.imgSrc}
                        className="h-full w-full object-cover "
                        style={
                          item.name === "Pouchii Redesign"
                            ? { objectPosition: "30% 10%" }
                            : item.name === "COVERLY - A Cover Letter Generator"
                            ? { objectPosition: "30% 35%" }
                            : {}
                        }
                      />
                    </div>
                  </div>
                ))
              : illustrate.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full border border-[#fff] rounded-[80px] p-[50px] flex gap-[50px] max-[1024px]::p-[35px] max-[1024px]:rounded-[50px] max-[905px]:rounded-[40px] max-[905px]:p-[25px]"
                  >
                    <div className="flex flex-col justify-between w-full">
                      <p className="pb-[16px] text-[48px] font-[700] max-[1024px]:text-[24px] max-[1024px]:pb-[12px] max-[905px]:pb-[8px] max-[905px]:text-[16px]">
                        {item.title}
                      </p>
                      <div className="flex gap-[20px] flex-col">
                        <p className="text-[20px] font-[500] max-[1024px]:text-[16px] max-[905px]:text-[12px]">
                          {item.paragraph}
                        </p>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-[8px] cursor-pointer"
                        >
                          <p className="font-[600] text-[24px] max-[1024px]:text-[16px] max-[905px]:text-[12px]">
                            Open
                          </p>
                          <CiShare1
                            color="#fff"
                            size={24}
                            className="max-[1024px]:w-[16px] max-[905px]:w-[14px]"
                          />
                        </a>
                      </div>
                    </div>
                    <img
                      className="w-[280px] h-[280px] rounded-[40px] max-[1024px]:w-[240px] max-[1024px]:h-[240px] max-[1024px]:rounded-[24px] max-[905px]:rounded-[16px] max-[905px]:w-[200px] max-[905px]:h-[200px]"
                      src={item.img}
                    />
                  </div>
                ))}
          </div>
        )}

        <div className="mt-[90px] flex justify-start items-start w-full">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default SubWork;
