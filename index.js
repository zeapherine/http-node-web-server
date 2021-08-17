const http = require('http');

const PORT = 3000;

const friends = [
	{
		id: 0,
		name: 'Nikoli Tesla',
	},
	{
		id: 1,
		name: 'Sir Isaac Newton  ',
	},
	{
		id: 2,
		name: 'Albert Einstein',
	},
];

const server = http.createServer();

server.on('request', (req, res) => {
	// /friends/2 => ['', 'friends', '2']
	const items = req.url.split('/');

	if (items[1] === 'friends') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		if (items.length === 3) {
			const freindIndex = Number(items[2]);
			res.end(JSON.stringify(friends[freindIndex]));
		} else {
			res.end(JSON.stringify(friends));
		}
	} else if (items[1] === 'messages') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<body>');
		res.write('<ul>');
		res.write('<li>Hello Isaac! </li>');
		res.write('<li>What are your thoughts on astronomy?</li>');
		res.write('</ul>');
		res.write('</body>');
		res.write('</html>');
		res.end();
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
