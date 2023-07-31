import RequestBuilder from './index.js';

describe('patterns/builder', () => {
  it('should be able to add pagination to the request object', () => {
    const request = new RequestBuilder('https://example.com');

    request
      .addPagination(10, 20);

    expect(request.url.searchParams.get('start')).toBe('10');
    expect(request.url.searchParams.get('end')).toBe('20');
  });

  it('should be able to add a sorting params to request object', () => {
    const request = new RequestBuilder('https://example.com');

    request
      .addSort('name', 'desc');

    expect(request.url.searchParams.get('sort')).toBe('name');
    expect(request.url.searchParams.get('order')).toBe('desc');
  });

  it('should be able to add a filter params to the request object', () => {
    const request = new RequestBuilder('https://example.com');

    request
      .addFilter('age', 18, 27);

    expect(request.url.searchParams.get('filter')).toBe('age');
    expect(request.url.searchParams.get('filter_lte')).toBe('18');
    expect(request.url.searchParams.get('filter_gte')).toBe('27');
  });

  it('should be able to chain methods', () => {
    const request = new RequestBuilder('https://example.com');

    const result =
      request
        .addPagination(10, 20)
        .addSort('name', 'desc')
        .addFilter('age', 18, 27);

    expect(result instanceof RequestBuilder).toBeTruthy();
  });
});
