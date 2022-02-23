const https = require('https');
const url = 'https://coderbyte.com/api/challenges/json/age-counting';
https.get(url, (response) => {
    let body = '';
    response.setEncoding('utf8');
    response.on('data',(data) => {
        body += data;
    });

    response.on('end',() => {
        let data = JSON.parse(body).data;
        data = `${data}`.split(',');
        const counting = data.reduce((acumulator, value) => {
            if(value.includes('age')){
                let age = value.substring(value.indexOf('=') + 1);
                return parseInt(age) >= 50 ? acumulator + 1 : acumulator;
            }
            return acumulator;
        },0);
        console.log(counting);
        return counting;
    });
});