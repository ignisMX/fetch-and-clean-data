const https = require('https');
const url = 'https://coderbyte.com/api/challenges/json/age-counting';
https.get(url, (response) => {
    let body = '';
    response.setEncoding('utf8');
    response.on('data',(data) => {
        body += data;
    });

    response.on('end',() => {
        console.log(body);

        return body;
    });
});