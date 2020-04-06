import https from 'https';
import { GithubUserCollectionModel, GithubUserDetailModel } from '../model/github.user.model';

const baseURI = 'https://api.github.com/search/users?q=language:';

export class GithubClient {

    public constructor() {}

    public getUsersByLanguage(language : String) : Promise<GithubUserCollectionModel> {
        var options = {
            method: 'GET',
            hostname: 'api.github.com',
            path: '/search/users?q=language:',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Xivolkar',
                'Authorization': 'token '
            }
        };

        options.path += language;
        options.headers.Authorization += process.env.GH_TOKEN;

        return new Promise((resolve, reject) => {
            var req = https.request(options, (response) => {
                let responseBody = '';
    
                response.on('data', (chunk) => {
                    responseBody += chunk;
                });
    
                response.on('end', () => {
                    if(responseBody.length){
                        try{
                            resolve(JSON.parse(responseBody));
                        } catch (error) {
                            reject(error);
                        }
                    }
                });
            }).on('error', (error) => {
                console.log('Error occurred', error);
                reject(error);
            });
    
            req.end();
        });
    }

    public getUserData(username: String) : Promise<GithubUserDetailModel> {
        var options = {
            method: 'GET',
            hostname: 'api.github.com',
            path: '/users/',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Xivolkar',
                'Authorization': 'token '
            }
        };

        options.path += username;
        options.headers.Authorization += process.env.GH_TOKEN;

        return new Promise((resolve, reject) => {
            var req = https.request(options, (response) => {
                let responseBody = '';
    
                response.on('data', (chunk) => {
                    responseBody += chunk;
                });
    
                response.on('end', () => {
                    if(responseBody.length){
                        try{
                            resolve(JSON.parse(responseBody));
                        } catch (error) {
                            reject(error);
                        }
                    }
                });
            }).on('error', (error) => {
                console.log('Error occurred', error);
                reject(error);
            });
    
            req.end();
        });        
    }
}