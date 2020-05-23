/**
 EasyHTTP library
 Library for making HTTP requests

 @version 3.0.0
 @author Marco Tedone
 @licence MIT
 **/

class EasyHTTP {
    // Make HTTP GET requests
    async get(url) {
        const response = await fetch(url);

        const responseData = await response.json();
        return responseData;
    }

    // Make HTTP POST request
    async post(url, body) {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(body)
        });

        const responseData = await response.json();
        return responseData;
    }

    // Make a put request
    async put(url, body) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(body)
        });
        const responseData = await response.json();
        return responseData;
    }

    // Make an HTTP DELETE request
    async delete(url) {

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type' : 'application/json'
            }
        });
        const responseData = await response.json();
        return 'Record deleted successfully';
    }
}

export const http = new EasyHTTP();