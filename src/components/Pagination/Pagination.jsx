import s from './Pagination.module.scss';

export default function Pagination({ next, prev, page, totalPages }) {
  return (
    <div className={s.buttonBox}>
      <button
        className={s.button}
        type="button"
        onClick={prev}
        disabled={page > 1 ? false : true}
      >
        PREV
      </button>
      <button
        className={s.button}
        type="button"
        onClick={next}
        disabled={page < totalPages ? false : true}
      >
        NEXT
      </button>
    </div>
  );
}
