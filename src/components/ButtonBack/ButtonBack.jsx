import PropTypes from 'prop-types';
import { IoMdArrowRoundBack } from 'react-icons/io';
import s from './ButtonBack.module.scss';

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

ButtonBack.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};
