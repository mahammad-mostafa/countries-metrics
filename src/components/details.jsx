import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

const Details = () => {
  const { name } = useParams();
  const error = useSelector((state) => state.countries.error);
  const countries = useSelector((state) => state.countries.list);
  const loading = useSelector((state) => state.countries.loading);
  if (loading) {
    return <h2>Loading</h2>;
  }
  if (error !== null) {
    return <h2>{error}</h2>;
  }
  const country = countries.find((item) => item.name.replace(/ /g, '-').toLowerCase() === name);
  if (country === undefined) {
    return <Navigate to="/404" />;
  }
  return (
    <section>
      <img src={country.flag} alt={country.name} />
      <h2>{country.name}</h2>
      <span>{country.capital}</span>
      <p>{country.region}</p>
      <p>{country.population}</p>
    </section>
  );
};

export default Details;
