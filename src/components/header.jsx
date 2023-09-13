import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Header = () => {
  const { name } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const title = name === undefined ? pathname.replace('/', '') : name;
  return (
    <header>
      <nav>
        <button type="button" onClick={() => navigate(-1)}>back</button>
        <h1>{title || 'countries'}</h1>
        <button type="button" onClick={() => navigate('about', { replace: pathname === '/about' })}>about</button>
      </nav>
    </header>
  );
};

export default Header;
