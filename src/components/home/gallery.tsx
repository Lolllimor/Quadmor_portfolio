import { Text } from "@mantine/core";
import { GalleryCard } from "../gallery/gallery-card";

export const Gallery = () => {
  const galleryImages = [
    {
      imageSrc: "./images/flowers.jpeg",
      title: "Soulful Sunflower",
      month: "August",
      year: "2022",
    },
    {
      imageSrc: "./images/kidda.jpeg",
      title: "Kida Kudzz",
      month: "August",
      year: "2022",
    },
    {
      imageSrc: "./images/red.jpeg",
      title: "Red (Action FIgure)",
      month: "August",
      year: "2022",
    },
    {
      imageSrc: "./images/bloom.png",
      title: "Bloom EOTP",
      month: "August",
      year: "2022",
    },
    {
      imageSrc: "./images/fat.jpeg",
      title: "Fat Mando",
      month: "August",
      year: "2022",
    },
  ];

  return (
    <div className="pb-[58px] border-b-[1px] border-white ">
      <Text className="text-white text-[24px] font-[500] pb-[40px]">
        GALLERY PREVIEW
      </Text>
      <div className="flex overflow-x-auto space-x-[-150px]">
        {galleryImages.map((item, idx) => (
          <GalleryCard
            name={item.title}
            key={idx}
            month={item.month}
            year={item.year}
            ImageSrc={item.imageSrc}
            classname={
              idx === 0
                ? "hover:border-white hover:z-20 hover:border-[2px]"
                : ""
            }
          />
        ))}
      </div>
    </div>
  );
};
