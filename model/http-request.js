import fetch from 'node-fetch';

export class HttpRequest {
    static getFetch(param){
        const url = 'http://localhost:4000/test';

        fetch(url)
        .then(response => response.json())
        .then(data => {
           param.res.status(200).json(data);
        })
        .catch(error => param.res.status(400).json(error));
    }
}