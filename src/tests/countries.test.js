import store from '../store';
import countries, { select, fetcher } from '../slices/countries';

describe('Testing network calls', () => {
  const response = [{
    name: { common: 'United States' }, flags: { png: '' }, capital: [], region: '', population: '', timezones: '',
  }];
  it('Should return the result successfully', async () => {
    global.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve(response) });
    const result = await store.dispatch(fetcher());
    expect(result.type).toBe('countries/fetch/fulfilled');
    expect(result.payload[0].id).toBe('united-states');
  });
  it('Should return not found response', async () => {
    global.fetch = () => Promise.resolve({ ok: false, json: () => Promise.resolve(response) });
    const result = await store.dispatch(fetcher());
    expect(result.type).toBe('countries/fetch/rejected');
    expect(result.payload).toBe('not found');
  });
  it('Should return json error', async () => {
    global.fetch = () => Promise.resolve({ ok: true, json: () => Promise.reject(new Error('Unexpected json token').message) });
    const result = await store.dispatch(fetcher());
    expect(result.type).toBe('countries/fetch/rejected');
    expect(result.payload).toBe('Unexpected json token');
  });
});
describe('Testing select filter', () => {
  const initial = {
    list: [], regions: [], selection: 'All', loading: true, error: null,
  };
  it('Should return the initial state', () => {
    expect(countries(undefined, { type: undefined })).toEqual(initial);
  });
  it('Should update the selection state', () => {
    expect(countries(initial, select('Europe')).selection).toBe('Europe');
  });
});
