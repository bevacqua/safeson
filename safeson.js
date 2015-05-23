module.exports = function safeson (data) {
  return JSON.stringify(data).replace(/&/g, '&amp;').replace(/<\//g, '&lt;/');
};
