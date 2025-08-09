import css from './Button.module.css';

// const handleClick = () => {
//   console.log('click');
// };
///////////////////////////////////
// let clicks = 0;
///////////////////////////////////
interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}
const Buttonn = ({ value, onUpdate }: ClickCounterProps) => {
  // const [user, setUser] = useState('');
  // const [isOpen, setIsOpen] = useState(false);

  // const updateClicks = () => {
  //   // clicks += 1; так нельзя
  //   setClicks(clicks + 1); //не обновляет состояние....сетКликс это регистрация состояния
  // };
  return (
    <button
      className={css.button}
      // onClick={handleClick}
      onClick={onUpdate}
    >
      clicks:{value}
    </button>
  );
};

export default Buttonn;
// если евент типизуем
// const handleClickk = (event:React.FormEvent<HTMLButtonElement) => {
//   console.log('click');
// };
