export default class RequestBuilder {
  constructor(url = '') {
    this.url = new URL(url);
  }

  addPagination (start, end) {
    this.url.searchParams.append('start', start);
    this.url.searchParams.append('end', end);

    return this;
  }

  addSort (sort, order) {
    this.url.searchParams.append('sort', sort);
    this.url.searchParams.append('order', order);

    return this;
  }

  addFilter (filter, filterLte, filterGte) {
    this.url.searchParams.append('filter', filter);
    this.url.searchParams.append('filter_lte', filterLte);
    this.url.searchParams.append('filter_gte', filterGte);

    return this;
  }
}
