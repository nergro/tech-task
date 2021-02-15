import { reducer } from './reducer';

test('should update search state', () => {
  expect(reducer('', { type: 'Search/Update', payload: 'Box' })).toBe('Box');
  expect(reducer('Box', { type: 'Search/Update', payload: '' })).toBe('');
});
