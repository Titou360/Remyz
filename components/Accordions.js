import React from 'react';

import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';

import data from "../public/data.json"

export default function Accordions() {
  return (
    <Accordion allowMultipleExpanded={false} className="flex flex-col w-3/4 mx-auto gap-6 my-20">
      {data.faq.map((q) => (
        <AccordionItem key={q.index}>
          <AccordionItemHeading>
            <AccordionItemButton className="w-full border border-solid font-bold text-light bg-primary dark:bg-white dark:text-black">
              {q.question}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="w-full border border-solid border-primary dark:border-darkModePrimary bg-white px-2">{q.answer}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
