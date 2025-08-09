import { useState } from 'react';
import { type AccordionItem } from '../types/accordion';

interface AccordionItemsProps {
  items: AccordionItem[];
}

const Accordeon = ({ items }: AccordionItemsProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const changeIndex = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => changeIndex(index)}>{item.title}</button>

          {activeIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordeon;
