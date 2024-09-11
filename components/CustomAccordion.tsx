import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { RiArrowDropDownLine } from "react-icons/ri";
export default function CustomAccordion() {
  return (
    <Accordion allowMultipleExpanded={true} allowZeroExpanded={true} className='w-full lg:w-[900px] '>
      <AccordionItem>
        <AccordionItemHeading >
          <AccordionItemButton className='bg-[#212F40] outline-none border-none w-full rounded-[20px] h-[74px] flex justify-between items-center px-[16px] sm:px-[35px] relative' >
            <span className='font-[600] text-[15px] sm:text-[20px] leading-6 text-[#FFFFFF]'>
              How do I get started with Scout?
            </span>

            <RiArrowDropDownLine className='text-[36px] text-[#FFFFFF]' />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className='bg-[#212F40] p-5  relative -top-[20px]  rounded-b-[20px] accordion__panel'>
          <p className='font-[300] text-[16px] leading-8 text-[#EBEBEB] mt-[15px]'>
            Exercitation in fugiat est ut ad ea cupidatat ut in
            cupidatat occaecat ut occaecat consequat est minim minim
            esse tempor laborum consequat esse adipisicing eu
            reprehenderit enim.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className='mt-[20px] '>
        <AccordionItemHeading >
          <AccordionItemButton className='bg-[#212F40] outline-none border-none w-full rounded-[20px] h-[74px] flex justify-between items-center px-[16px] sm:px-[35px] relative' >
            <span className='font-[600] w-[90%]  text-[15px] sm:text-[20px] leading-6 text-[#FFFFFF]'> 
              What makes Scout different from other trading tools?
            </span>

            <RiArrowDropDownLine className='text-[36px]  text-[#FFFFFF]' />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className='bg-[#212F40] px-[35px] py-5   relative -top-[20px]  rounded-b-[20px] accordion__panel'>
          <p className='font-[300]  text-[16px] leading-8 text-[#EBEBEB] mt-[15px]'>
            Exercitation in fugiat est ut ad ea cupidatat ut in
            cupidatat occaecat ut occaecat consequat est minim minim
            esse tempor laborum consequat esse adipisicing eu
            reprehenderit enim.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

    </Accordion>
  );
}