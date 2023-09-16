import { useDispatch, useSelector } from 'react-redux';
import Item from './item';
import { select } from '../slices/countries';
import Indicator from './indicator';
import Styles from '../styles/list.module.css';

const List = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.countries.error);
  const regions = useSelector((state) => state.countries.regions);
  const loading = useSelector((state) => state.countries.loading);
  const countries = useSelector((state) => state.countries.list);
  const selection = useSelector((state) => state.countries.selection);
  let result = countries;
  if (selection === 'All') {
    result = countries;
  } else {
    result = countries.filter((country) => country.region === selection);
  }
  if (loading) {
    return <Indicator loading="true" />;
  }
  return (
    <section>
      <h2 className={Styles.title}>Filter countries by continent</h2>
      <select className={Styles.select} name="regions" onChange={(event) => dispatch(select(event.target.value))} value={selection}>
        <option value="All">All</option>
        {regions.map((region) => <option key={region} value={region}>{region}</option>)}
      </select>
      {error === null && result.length > 0 ? (
        <ul className={Styles.list}>
          {result.map((country) => <Item key={country.id} country={country} />)}
        </ul>
      ) : <Indicator message={error} length={result.length} />}
    </section>
  );
};

export default List;
