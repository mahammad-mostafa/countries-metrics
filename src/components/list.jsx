import { useDispatch, useSelector } from 'react-redux';
import Item from './item';
import { select } from '../slices/countries';

const List = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.countries.error);
  const regions = useSelector((state) => state.countries.regions);
  const loading = useSelector((state) => state.countries.loading);
  const countries = useSelector((state) => state.countries.list);
  const selection = useSelector((state) => state.countries.selection);
  let result = countries;
  if (selection === 'all') {
    result = countries;
  } else {
    result = countries.filter((country) => country.region === selection);
  }
  if (loading) {
    return <h2>Loading</h2>;
  }
  if (error !== null) {
    return <h2>{error}</h2>;
  }
  return (
    <section>
      <select name="regions" onChange={(event) => dispatch(select(event.target.value))}>
        <option value="all">All</option>
        {regions.map((region) => <option key={region} value={region}>{region}</option>)}
      </select>
      <ul>
        {result.map((country) => <Item key={country.id} country={country} />)}
      </ul>
    </section>
  );
};

export default List;
