const polka = require("polka");
const { getApiHttpResponse } = require("@wildcard-api/server");
require("./endpoints");

polka()
  .all("/_wildcard_api/*", async (req, res) => {
    const { url, method, body: originalBody } = req;
    const rpcResponse = await getApiHttpResponse(
      { url, method, originalBody },
      {}
    );
    const { body, statusCode, contentType, etag } = rpcResponse;

    res.writeHead(statusCode, { "Content-Type": contentType, ETag: etag });
    res.end(JSON.stringify({ data: body }));
  })
  .listen(3000, (err) => {
    if (err) {
      throw err;
    }

    console.log(`running... in ${process.env.NODE_ENV} mode`);
  });
