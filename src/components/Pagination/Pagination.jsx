import PropTypes from 'prop-types';
import s from './Pagination.module.scss';

export default function Pagination({ next, prev, page, totalPages }) {
  return (
    <div className={s.buttonBox}>
      <button
        className={s.button}
        type="button"
        onClick={prev}
        disabled={page <= 1}
      >
        prev
      </button>
      <button
        className={s.button}
        type="button"
        onClick={next}
        disabled={page >= totalPages}
      >
        next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
