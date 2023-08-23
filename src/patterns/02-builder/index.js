export default class RequestBuilder {
  constructor(url = '') {
    this.url = new URL(url);
  }

  addPagination (start, end) {
    this.url.searchParams.set('start', start);
    this.url.searchParams.set('end', end);
  }

  addSort (sort, order) {
    this.url.searchParams.set('sort', sort);
    this.url.searchParams.set('order', order);
  }

  addFilter (filter, filterLte, filterGte) {
    this.url.searchParams.set('filter', filter);
    this.url.searchParams.set('filter_lte', filterLte);
    this.url.searchParams.set('filter_gte', filterGte);
  }
}
