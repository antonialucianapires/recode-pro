var http = require('http');
var server = http.createServer(function(req, res) {
    var categoria = req.url;
    if(categoria == '/front-end') {
        res.end("<html><body>Tecnologias Front-End: TypeScript, Angular,React..</body></html>")
    } else if( categoria == '/backend') {
        res.end("<html><body>Tecnologias Back-End: NodeJS, Python, PHP,MySQL...</body></html>")
    } else if(categoria == '/estrutura') {
        res.end(("<html><body>Azure Cloud, Linux, MySQL Server...</body></html>") 
    } else {
        res.end(("<html><body>Programador Full Stack</body></html>")
    }
});

server.listen(3000);