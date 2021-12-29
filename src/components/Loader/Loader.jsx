import Loader from 'react-loader-spinner';
import s from './Loader.module.scss';

export default function Loading() {
  return (
    <Loader
      className={s.loader}
      type="Rings"
      color="#2c5364"
      height={300}
      width={300}
      timeout={3000}
    />
  );
}
