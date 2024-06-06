import { Text } from "@mantine/core";
import { ArticleCard } from "@/components/articles/artice-card";
import { CiShare1 } from "react-icons/ci";
export const Articles = () => {
  const articleData = [
    {
      name: "DESIGN",
      topic: "The Rule of Third; Success stories all together",
      paragraph:
        "Have you ever felt disappointed in yourself or given up on a goal because you thought you were “falling off track” or not progressing as you would have liked to? ",
    },
    {
      name: "DESIGN",
      topic: "Beyond Design: The Strategic Redesign of Pouchii App",
      paragraph:
        "Excited to share this piece on the strategic re-design journey of Pouchii App, highlighting how innovative design thinking has transformed user experience... ",
    },
    {
      name: "DESIGN",
      topic: "Finding Empathy To Inspire Your Design Thinking",
      paragraph:
        "The ability to relate to the feelings of others is a superpower that can help any individual prosper, not just in design but in life as a whole. The idea of empathy in... ",
    },
    {
      name: "DESIGN",
      topic: "Design Tips for Non-Designers",
      paragraph:
        "Everyone is a designer, that much is true. However, not everyone is a qualified designer, and not all of us are visual designers. Whatever the case, you might... ",
    },

    // Add more tool data as needed
  ];

  return (
    <div className='pt-[69px] pb-[249px]'>
      <div className='flex flex-row justify-start items-center'>
        <p className='text-[32px] font-[500]'> Articles</p>
        <div>
 
        </div>
      </div>
      <div className='pt-[40px] gap-[40px] flex overflow-x-auto no-scrollbar'>
        {articleData.map((item, idx) => (
          <ArticleCard
            key={idx}
            name={item.name}
            paragraph={item.paragraph}
            topic={item.topic}
          />
        ))}
      </div>
    </div>
  );
};
