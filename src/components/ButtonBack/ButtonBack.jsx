import s from './ButtonBack.module.scss';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function ButtonBack({ onBackClick }) {
  return (
    <div className={s.buttonBox}>
      <button className={s.button} type="button" onClick={onBackClick}>
        <IoMdArrowRoundBack className={s.icon} />
        BACK
      </button>
    </div>
  );
}
