import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { fetcher } from '../slices/countries';
import Header from './header';

const Layout = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [fade, setFade] = useState(true);
  const countries = useSelector((state) => state.countries.list);
  useEffect(() => {
    if (countries.length === 0) {
      const promise = dispatch(fetcher());
      return () => promise.abort();
    }
    return undefined;
  }, [dispatch, countries]);
  useLayoutEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 250);
    return () => clearTimeout(timer);
  }, [pathname]);
  return (
    <>
      <Header />
      <main>
        <section id="page" className={fade ? 'fade' : null} style={fade ? null : { transition: 'opacity 0.25s linear' }}>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Layout;
