const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    });

    const matchURL = /^\/response\/(.+)\/delay\/(\d+)\/?$/;
    //http://localhost:5200/response/{"data": "Hello Word"}/delay/1000/

    if (!matchURL.test(req.url)) return res.end();

    const [, response, delay] = matchURL.exec(req.url);
    const jsonResonse = decodeURIComponent(response);

    setTimeout(() => {
        res.write(jsonResonse);
        res.end();
    }, +delay)

}).listen(5200);