interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}

const Button = ({ value, onUpdate }: ClickCounterProps) => {
  // console.log('Clicked!', event);
  // console.log('Target:', event.target);
  return <button onClick={onUpdate}>Current: {value}</button>;
};

export default Button;

// return <button onClick={() => console.log("Clicked!")}>Click me!</button>;
/////////////////////////////
// interface User {
//   id: number;
//   name: string;
// }

// // Стан який зберігає масив об'єктів користувача
// const [items, setItems] = useState<User[]>([]);

// // Стан, який може бути або об'єктом, або null
// const [user, setUser] = useState<User | null>(null);
//////////////////////////////////////
