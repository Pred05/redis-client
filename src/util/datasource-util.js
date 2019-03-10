module.exports = {
  getDatasourceKey: datasource => `${datasource.url}:${datasource.port}`,
};
