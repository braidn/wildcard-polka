const polka = require("polka");
const { getApiHttpResponse } = require("@wildcard-api/server");

const { join } = require('path');
const dir = join(__dirname, '../dist');
const serve = require('sirv')(dir);

require("./endpoints");

polka()
  .use("/", serve)
  .all("/_wildcard_api/*", async (req, res) => {
    const { url, method, body: originalBody } = req;
    const rpcResponse = await getApiHttpResponse(
      { url, method, originalBody },
      {}
    );
    const { body, statusCode, contentType, etag } = rpcResponse;

    res.writeHead(statusCode, { "Content-Type": contentType, ETag: etag });
    res.end(JSON.stringify({ body }));
  })
  .listen(3000, (err) => {
    if (err) {
      throw err;
    }

    console.log(`running... in ${process.env.NODE_ENV} mode`);
  });
