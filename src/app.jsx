import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './store';
import Layout from './components/layout';
import List from './components/list';
import Details from './components/details';
import About from './components/about';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<List />} />
            <Route path="404" element={<h1>404</h1>} />
            <Route path="about" element={<About />} />
            <Route path=":name" element={<Details />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
