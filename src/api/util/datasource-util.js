module.exports = {
  getDatasourceKeyByDatasource: datasource => `${datasource.url}:${datasource.port}`,
  getDatasourceKeyByUrlAndPort: (url, port) => `${url}:${port}`,
};
