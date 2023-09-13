import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Item = ({ country }) => {
  const navigate = useNavigate();
  return (
    <li>
      <button type="button" onClick={() => navigate(country.id)}>
        <article>
          <img src={country.flag} alt={country.name} />
          <h2>{country.name}</h2>
          <span>{country.population}</span>
        </article>
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
