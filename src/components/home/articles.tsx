import { Text } from "@mantine/core";
import { ArticleCard } from "@/components/articles/artice-card";
import { IoMdOpen } from "react-icons/io";
export const Articles = () => {
  const articleData = [
    {
      name: "DESIGN",
      topic: "The Rule of Third; Success stories all together",
      paragraph:
        "In this thought-provoking article, we explore the seamless integration of artistry and design through the lens of [Your Name], a visionary designer and artist. ",
    },
    {
      name: "DESIGN",
      topic: "The Rule of Third; Success stories all together",
      paragraph:
        "In this thought-provoking article, we explore the seamless integration of artistry and design through the lens of [Your Name], a visionary designer and artist. ",
    },
    {
      name: "DESIGN",
      topic: "The Rule of Third; Success stories all together",
      paragraph:
        "In this thought-provoking article, we explore the seamless integration of artistry and design through the lens of [Your Name], a visionary designer and artist. ",
    },
    {
      name: "DESIGN",
      topic: "The Rule of Third; Success stories all together",
      paragraph:
        "In this thought-provoking article, we explore the seamless integration of artistry and design through the lens of [Your Name], a visionary designer and artist. ",
    },
    {
      name: "DESIGN",
      topic: "The Rule of Third; Success stories all together",
      paragraph:
        "In this thought-provoking article, we explore the seamless integration of artistry and design through the lens of [Your Name], a visionary designer and artist. ",
    },

    // Add more tool data as needed
  ];

  return (
    <div className="pt-[69px] pb-[249px]">
      <div className="flex flex-row justify-between items-center">
        <Text className="text-[32px] font-[500]"> Articles</Text>
        <div >
          <a className="flex gap-[8px] items-center" >
            <Text className="text-[16px] font-[700]">View More</Text>
            
        <IoMdOpen color="#fff" size={24} />
          </a>
        </div>
      </div>
      <div className="pt-[40px] gap-[40px] flex overflow-x-auto">
        {articleData.map((item, idx) => (
          <ArticleCard key={idx}
            name={item.name}
            paragraph={item.paragraph}
            topic={item.topic}
          />
        ))}
      </div>
    </div>
  );
};
