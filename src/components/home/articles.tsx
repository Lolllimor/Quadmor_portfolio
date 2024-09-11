import { ArticleCard } from '@/components/articles/artice-card';
export const Articles = () => {
  const articleData = [
    {
      name: 'DESIGN',
      topic: 'The Rule of Third; Success stories all together',
      url: 'https://medium.com/@quadmor009/the-rules-of-third-when-chasing-a-goal-897b87778eb3',
      paragraph:
        'Have you ever felt disappointed in yourself or given up on a goal because you thought you were “falling off track” or not progressing as you would have liked to? ',
    },
    {
      name: 'DESIGN',
      topic: 'Beyond Design: The Strategic Redesign of Pouchii App',
      url: '',
      paragraph:
        'Excited to share this piece on the strategic re-design journey of Pouchii App, highlighting how innovative design thinking has transformed user experience... ',
    },
    {
      name: 'DESIGN',
      topic: 'Finding Empathy To Inspire Your Design Thinking',
      url: 'https://medium.com/@quadmor009/finding-empathy-to-inspire-your-design-thinking-541cda74e985',
      paragraph:
        'The ability to relate to the feelings of others is a superpower that can help any individual prosper, not just in design but in life as a whole. The idea of empathy in... ',
    },
    {
      name: 'DESIGN',
      topic: 'Design Tips for Non-Designers',
      url: 'https://medium.com/@quadmor009/design-tips-for-non-designers-46fb04d1cef4',
      paragraph:
        'Everyone is a designer, that much is true. However, not everyone is a qualified designer, and not all of us are visual designers. Whatever the case, you might... ',
    },
    {
      name: 'DESIGN',
      topic: 'Elastic Thinking for Creative Problem Solving',
      url: 'https://medium.com/@quadmor009/elastic-thinking-for-creative-problem-solving-e9568342d3f9',
      paragraph:
        'Elastic thinking is a cognitive approach that enables individuals to take a counterintuitive approach to creative problem-solving...  ',
    },
    {
      name: 'DESIGN',
      topic: 'Valuable Qualities of a Mobile Design Tester',
      url: 'https://medium.com/@quadmor009/valuable-qualities-of-a-mobile-design-tester-9b86e456dd57',
      paragraph:
        'Over the past few weeks, I’ve had the privilege of collaborating with a remarkable Software Quality Assurance Engineer who specializes in testing the design of a mobile... ',
    },
    {
      name: 'DESIGN',
      topic: 'God’s Eye — Stories about Success Stories',
      url: 'https://medium.com/@quadmor009/gods-eye-stories-about-success-stories-a4653087e2b4',
      paragraph:
        'Success stories are truly inspirational. We all aspire to achieve success in various facets of life... ',
    },
  ];

  return (
    <div className="pt-[69px] pb-[249px] max-[800px]:pt-[34px] max-[800px]:pb-[124px]">
      <div className="flex flex-row justify-start items-center  ">
        <p className="text-[32px] font-[500] max-[800px]:text-[12px]">
          {' '}
          Articles
        </p>
        <div></div>
      </div>
      <div className="pt-[40px] gap-[40px] flex overflow-x-auto no-scrollbar w-full">
        {articleData.map((item, idx) => (
          <ArticleCard
            url={item.url}
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
