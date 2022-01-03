import PropTypes from 'prop-types';
import noPhoto from '../../images/no-photo.png';
import s from './Cast.module.scss';

export default function Cast({ castList }) {
  return (
    <ul className={s.castList}>
      {castList.cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={s.castItem}>
          <div className={s.nameBox}>
            <h3>{name}</h3>
            <h4 className={s.character}>({character})</h4>
          </div>
          <img
            className={s.image}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : noPhoto
            }
            alt={name}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
}

Cast.propTypes = {
  castList: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};
