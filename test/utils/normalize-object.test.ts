import normalizeObject from '../../src/utils/normalize-object';

describe('Unit | Utility | normalize object', () => {
  it('it returns value', () => {
    const objA = { value: 'Ivan' };
    const value = normalizeObject(objA);

    expect(value).toBe('Ivan');
  });

  it('it returns value from nested', () => {
    const objA = { name: { value: 'Ivan' } };
    const value = normalizeObject(objA);

    expect(value).toEqual({ name: 'Ivan' });
  });

  it('it returns multiple values from nested', () => {
    const objA = { name: { value: 'Ivan' }, foo: { value: 'bar' } };
    const value = normalizeObject(objA);

    expect(value).toEqual({ name: 'Ivan', foo: 'bar' });
  });

  it('it returns for deep nested', () => {
    const objA = { details: { name: { value: 'Ivan' } } };
    const value = normalizeObject(objA);

    expect(value).toEqual({ details: { name: 'Ivan' } });
  });
});
