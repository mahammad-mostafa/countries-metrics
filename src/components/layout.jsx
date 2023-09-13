import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetcher } from '../slices/countries';
import Header from './header';

const Layout = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.list);
  useEffect(() => {
    if (countries.length === 0) {
      const promise = dispatch(fetcher());
      return () => promise.abort();
    }
    return undefined;
  }, [dispatch, countries]);
  return (
    <>
      <Header />
      <main>
        <section id="page">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Layout;
