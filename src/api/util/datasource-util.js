module.exports = {
  getDatasourceKeyByDatasource: datasource => `${datasource.host}:${datasource.port}`,
  getDatasourceKeyByUrlAndPort: (url, port) => `${url}:${port}`,
};
