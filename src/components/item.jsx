import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Styles from '../styles/item.module.css';
import { Browse } from './icons';

const Item = ({ country }) => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);
  useEffect(() => setFlipped(true), []);
  return (
    <li>
      <button className={`${Styles.button} ${flipped ? null : Styles.flip}`} type="button" onClick={() => navigate(country.id)}>
        <img className={Styles.flag} src={country.flag} alt={country.name} />
        <h2 className={Styles.name}>{country.name}</h2>
        <div className={Styles.number}>{country.population}</div>
        <div className={Styles.browse}><Browse /></div>
      </button>
    </li>
  );
};

Item.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;
