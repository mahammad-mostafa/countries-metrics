import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import Indicator from './indicator';
import Styles from '../styles/details.module.css';

const Details = () => {
  const { name } = useParams();
  const [flipped, setFlipped] = useState(false);
  const error = useSelector((state) => state.countries.error);
  const countries = useSelector((state) => state.countries.list);
  const loading = useSelector((state) => state.countries.loading);
  useEffect(() => setFlipped(true), []);
  if (loading) {
    return <Indicator loading="true" />;
  }
  if (error !== null) {
    return <Indicator message={error} />;
  }
  const country = countries.find((item) => item.name.replace(/ /g, '-').toLowerCase() === name);
  if (country === undefined) {
    return <Navigate to="/404" />;
  }
  return (
    <section className={Styles.section}>
      <img className={Styles.flag} src={country.flag} alt={country.name} />
      <div className={`${Styles.labels} ${flipped ? null : Styles.flip}`}>
        <span>Name:</span>
        <span className={Styles.text}>{country.name}</span>
      </div>
      <div className={`${Styles.labels} ${flipped ? null : Styles.flip}`}>
        <span>Capital:</span>
        <span className={Styles.text}>{country.capital}</span>
      </div>
      <div className={`${Styles.labels} ${flipped ? null : Styles.flip}`}>
        <span>Population:</span>
        <span className={Styles.text}>{country.population}</span>
      </div>
      <div className={`${Styles.labels} ${flipped ? null : Styles.flip}`}>
        <span>Timezone:</span>
        <span className={Styles.text}>
          {country.timezones.map((timezone) => <div key={timezone}>{timezone}</div>)}
        </span>
      </div>
    </section>
  );
};

export default Details;
