import { CiShare1 } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import { Flex, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Gallery = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const galleryImages = [
    {
      hover: "./images/full-flower.jpeg",
      imageSrc: "./images/flowers.jpeg",
      title: "Soulful Sunflower",
      month: "August",
      year: "2022",
    },
    {
      hover: "./images/full-kidda.jpeg",
      imageSrc: "./images/kidda.jpeg",
      title: "Kida Kudzz",
      month: "August",
      year: "2022",
    },
    {
      hover: "./images/full-red.jpeg",
      imageSrc: "./images/red.jpeg",
      title: "Red (Action FIgure)",
      month: "August",
      year: "2022",
    },
    {
      hover: "./images/full-bloom.png",
      imageSrc: "./images/bloom.png",
      title: "Bloom EOTP",
      month: "August",
      year: "2022",
    },
    {
      hover: "/images/full-fat.jpeg",
      imageSrc: "./images/fat.jpeg",
      title: "Fat Mando",
      month: "August",
      year: "2022",
    },
  ];
  return (
    <div className=" flex pb-[100px] mt-[50px] mx-auto justify-center overflow-auto flex-wrap gap-[50px] max-[637px]:gap-x-[20px] max-[637px]:gap-y-[25px] max-[637px]:mt-[30px]">
      <p className="text-[24px] font-[700]">Gallery</p>
      {galleryImages.map((item, idx) => (
        <div
          className="w-[387px] h-[528px] relative group max-[1024px]:w-[350px] max-[1024px]:h-[500px] max-[927px]:w-[300px]  max-[927px]:h-[450px] max-[825px]:w-[270px] max-[825px]:h-[430px] max-[637px]:w-[240px] max-[637px]:h-[400px] max-[547px]:w-[220px]   "
          key={idx}
        >
          <CiShare1
            color="#fff"
            onClick={open}
            size={24}
            className=" top-[10px] left-[10px] max-sm:h-[7px] absolute cursor-pointer max-[637px]:w-[16px] max-[637px]:h-[16px]"
          />
          <img
            src={item.imageSrc}
            className="w-[387px] h-[528px]  max-[1024px]:w-[350px] max-[1024px]:h-[500px] max-[927px]:w-[300px] max-[927px]:h-[450px] max-[825px]:w-[270px] max-[825px]:h-[430px] max-[637px]:w-[240px] max-[637px]:h-[400px] "
          />
          <a
            href={item.hover}
            download={item.title}
            className="cursor-pointer flex gap-[5px] items-center  absolute bottom-[10px] right-[10px]"
          >
            <IoMdDownload />
            <div className="group-hover:block hidden">
              <p className="font-[500] text-[16px]">Download</p>
            </div>
          </a>
          <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            centered
            styles={{
              body: {
                padding: 0,
              },
            }}
          >
            <div className="no-scrollbar">
              <img src={item.hover} className="h-fit w-fit" />
            </div>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
