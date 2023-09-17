import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { About, Back } from './icons';
import Styles from '../styles/header.module.css';

const Header = () => {
  const { name } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const title = name === undefined ? pathname.replace('/', '') : name;
  return (
    <header className={Styles.header}>
      <nav className={Styles.navigation}>
        <button className={Styles.button} type="button" onClick={() => navigate(-1)}>
          <Back />
        </button>
        <h1 className={Styles.title}>{title || 'countries'}</h1>
        <button className={Styles.button} type="button" onClick={() => navigate('about', { replace: pathname === '/about' })}>
          <About />
        </button>
      </nav>
    </header>
  );
};

export default Header;
