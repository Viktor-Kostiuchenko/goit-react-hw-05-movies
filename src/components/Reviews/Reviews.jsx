import PropTypes from 'prop-types';
import noPhoto from '../../images/no-photo.png';
import s from './Reviews.module.scss';

export default function Reviews({ reviews }) {
  return (
    <ul className={s.reviewsList}>
      {reviews.results.map(
        ({ id, author, content, author_details: { avatar_path } }) => (
          <li key={id} className={s.reviewsItem}>
            <div className={s.reviewsAuthor}>
              <h3 className={s.author}>{author}</h3>
              <img
                className={s.image}
                src={avatar_path ? avatar_path.slice(1) : noPhoto}
                alt={author}
                loading="lazy"
              />
            </div>
            <p className={s.reviewsContent}>{content}</p>
          </li>
        ),
      )}
    </ul>
  );
}
