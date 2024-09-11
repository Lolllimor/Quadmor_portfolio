import { Flex } from '@mantine/core';
import React, { useState } from 'react';

const CaseStudy = () => {
  const data = [
    {
      type: 'App Redesign 2024 ',
      name: 'Pouchii Redesign',
      imgSrc: '/images/pochi-bg.svg',
      url: 'https://www.behance.net/gallery/188111073/Pouchii-Redesign',
    },
    {
      type: 'COVERLY 2021',
      name: 'COVERLY - A Cover Letter Generator',
      imgSrc: '/images/coverly-bg.svg',
      url: 'https://www.behance.net/gallery/170646061/Cover-Letter-generator-Case-Study',
    },
    {
      type: 'Administrative Dashboard Redesign',
      name: 'Administrative Dashboard Redesign',
      imgSrc: '/images/add.svg',
    },
    {
      type: 'Fundraising Website Redesign',
      name: 'Fundraising Website Redesign',
      imgSrc: '/images/coming-soon.svg',
    },
  ];

  return (
    <Flex className="flex pt-[60px] gap-[88px] pb-[248px] flex-wrap max-[1024px]:gap-[66px] max-[768px]:gap-[44px] max-[425px]:gap-[33px]">
      {data.map((item, idx) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex flex-col gap-5"
        >
          <p className="text-[20px] font-[700]">{item.name}</p>
          <img
            key={idx}
            src={item.imgSrc}
            alt={`Image for ${item.name}`}
            className="rounded-[8px] w-full h-[full"
          />
        </a>
      ))}
    </Flex>
  );
};

export default CaseStudy;
