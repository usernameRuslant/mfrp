// src/components/App.tsx

import { useState } from 'react';
import Button from './Button/Button';
import Mailbox from './Condition';
import Product from './Product';
import Buttonn from './buttonn/Buttonn';
import CountDisplay from './CountDisplay/CountDisplay';
import ABC from './ABC/ABC';
import '../index.css';
import Accordeon from './Accordeon/Accordeon';
import { type AccordionItem } from './types/accordion';

const accordionItems: AccordionItem[] = [
  { title: 'section 1', content: 'content of section 1' },
  { title: 'section 2', content: 'content of section 2' },
  { title: 'section 3', content: 'content of section 3' },
  { title: 'section 4', content: 'content of section 4' },
  { title: 'section 5', content: 'content of section 5' },
];

interface Values {
  a: number;
  b: number;
  c: number;
}

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [clicks1, setClicks1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<Values>({
    a: 0,
    b: 0,
    c: 0,
  });

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  const updateClicks = () => {
    // clicks += 1; так нельзя
    setClicks1(clicks1 + 1);
  };
  const toggleOnOff = () => {
    setIsOpen(!isOpen);
  };
  const onUpdateValues = (key: keyof Values) => {
    setValues({ ...values, [key]: values[key] + 1 });
  };

  return (
    <>
      <hr />
      <Accordeon items={accordionItems} />
      <hr />
      <h1>Best selling</h1>

      <CountDisplay count={clicks1} />
      <Buttonn value={clicks1} onUpdate={updateClicks} />
      <Buttonn value={clicks1} onUpdate={updateClicks} />
      <Buttonn value={clicks1} onUpdate={updateClicks} />
      <button onClick={toggleOnOff}>{isOpen ? 'hide' : 'show'}</button>
      {isOpen && <p>YOU CAN SEE ME!</p>}
      <hr />
      <ABC values={values} onUpdate={onUpdateValues} />
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <Button value={clicks} onUpdate={handleClick} />
      <Button value={clicks} onUpdate={handleClick} />

      <>
        <Mailbox username="alise" messages={[]} />
      </>
    </>
  );
}
