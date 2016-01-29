var proxy = require('http-proxy').createProxyServer({
  secure: false,
  changeOrigin: true,
  target: 'https://' + process.env.PHAB_HOST
});

proxy.on('proxyReq', function(proxyReq) {
  proxyReq.setHeader('Cookie', 'phsid=' + process.env.PHAB_SESSION_ID);
});

var server = require('http').createServer(function(req, res) {
  if (/^\/file\/data/.test(req.url)) {
    proxy.web(req, res);
  } else {
    res.statusCode = 403;
    res.end();
  }
});

server.listen(process.env.PORT);
