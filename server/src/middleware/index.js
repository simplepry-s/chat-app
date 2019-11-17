export const authentication = (req, res, next) => {
  res.connection.setTimeout(20000);
  next();
};
