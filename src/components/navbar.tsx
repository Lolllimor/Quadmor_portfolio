import { Button, Text } from "@mantine/core";
import { useState } from "react";

export const Navbar = ({ onDataUpdate }: {onDataUpdate: any}) => {
  const [selected, setSelected] = useState('')
  return (
    <div className="flex justify-between items-center pb-[32px] border-b-[1px] border-white w-[100%]">
      <img src="/images/sig.png" onClick={() =>{   onDataUpdate('home'); setSelected('home')}}/>
      <div className="flex w-[460px] justify-between">
        <span className={`text-[16px] font-[500] cursor-pointer active:font-[700] ${selected === 'case' && 'font-[700]'}` }onClick={() =>{   onDataUpdate('case'); setSelected('case')}}>Case Studies</span>
        <span className={`text-[16px] font-[500] cursor-pointer active:font-[700] ${selected === 'profile' && 'font-[700]'}` }onClick={() =>{   onDataUpdate('profile'); setSelected('profile')}}>Profile</span>
        <span className={`text-[16px] font-[500] cursor-pointer active:font-[700] ${selected === 'gallery' && 'font-[700]'}` } onClick={() => {onDataUpdate('gallery') ;setSelected('gallery')}}>Gallery</span>
        <span className={`text-[16px] font-[500] cursor-pointer active:font-[700] ${selected === 'works' && 'font-[700]'}` } onClick={() => {onDataUpdate('works'); setSelected('works')}}>Works</span>
      </div>
      <Button className="bg-[#fff] text-[#000] rounded-[37px] h-[52px] px-[24px]">
        <Text className="text-[16px] font-[700] "> View Resume</Text>
      </Button>
    </div>
  );
};
