import https from 'https';

const baseURI = 'https://api.github.com/search/users?q=language:';

export class GithubClient {

    public constructor() {}

    public getUsersByLanguage(language : String) {
        var options = {
            method: 'GET',
            hostname: 'api.github.com',
            path: '/search/users?q=language:',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Xivolkar'
            }
        };

        options.path += language;

        return new Promise((resolve, reject) => {
            var req = https.request(options, (response) => {
                let responseBody = '';
    
                  // A chunk of data has been recieved.
                response.on('data', (chunk) => {
                    responseBody += chunk;
                });
    
                // The whole response has been received. Print out the result.
                response.on('end', () => {
                    if(responseBody.length){
                        try{
                            resolve(JSON.parse(responseBody));
                        } catch (error) {
                            reject(error);
                        }
                    }
                    console.log(responseBody);
                    console.log(JSON.parse(responseBody));
                });
            }).on('error', (error) => {
                console.log('Error occurred', error);
                reject(error);
            });
    
            req.end();
        });
    }
}