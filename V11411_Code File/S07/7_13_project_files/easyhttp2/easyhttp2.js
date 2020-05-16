/**
 EasyHTTP library
 Library for making HTTP requests

 @version 2.0.0
 @author Marco Tedone
 @licence MIT
**/

class EasyHTTP {
    // Make HTTP GET requests
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // Make HTTP POST request
    post(url, body) {
        return new Promise((resolve, reject) =>  {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // Make a put request
    put(url, body) {
        return new Promise((resolve, reject) =>  {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // Make an HTTP DELETE request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                }
            })
                .then(res => res.json())
                .then(() => resolve('Resource deleted'))
                .catch(err => reject(err));
        });
    }
}