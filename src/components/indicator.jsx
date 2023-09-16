import PropTypes from 'prop-types';
import Styles from '../styles/indicator.module.css';

const Indicator = ({ loading, message, length }) => {
  if (loading) {
    return (
      <div className={Styles.block}>
        <svg className={Styles.loader} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
          <path
            d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6
            39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
          />
        </svg>
      </div>
    );
  }
  if (message !== undefined || length === 0) {
    return (
      <div className={Styles.inline}>
        <svg className={Styles.error} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
          <path
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
          />
        </svg>
        <h2 className={Styles.text}>{(message !== undefined ? message : 'Empty List!')}</h2>
      </div>
    );
  }
  return null;
};

Indicator.propTypes = PropTypes.shape({
  loading: PropTypes.bool.isRequired,
  length: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
}).isRequired;

export default Indicator;
