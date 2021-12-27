import PropTypes from 'prop-types';
import noPoster from '../../../images/no_image_poster.png';
import s from './MoviesItem.module.scss';

export default function MoviesItem({ src, title, name }) {
  return (
    <div className={s.card}>
      <img
        className={s.image}
        src={src ? `https://image.tmdb.org/t/p/w500${src}` : noPoster}
        alt={title}
        loading="lazy"
      />
      <h2 className={s.title}>{title ? title : name}</h2>
    </div>
  );
}
