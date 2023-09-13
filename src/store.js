import { configureStore } from '@reduxjs/toolkit';
import countries from './slices/countries';

export default configureStore({ reducer: { countries } });
