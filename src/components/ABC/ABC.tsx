import css from './ABC.module.css';

interface ABCupdateProps {
  values: { a: number; b: number; c: number };
  onUpdate: (key: 'a' | 'b' | 'c') => void;
}

const ABC = ({ values, onUpdate }: ABCupdateProps) => {
  return (
    <ul className={css.list}>
      <li>
        <span className={css.item} onClick={() => onUpdate('a')}>
          A:{values.a}
        </span>
      </li>
      <li>
        <span className={css.item} onClick={() => onUpdate('b')}>
          B:{values.b}
        </span>
      </li>
      <li>
        <span className={css.item} onClick={() => onUpdate('c')}>
          C:{values.c}
        </span>
      </li>
    </ul>
  );
};

export default ABC;
