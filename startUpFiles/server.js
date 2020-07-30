const config = require("config");

module.exports = (app) => {
  const port = config.get("SERVER.PORT");
  app.listen(port, (_) =>
    console.log(`server started, listening on port ${port} `)
  );
};
