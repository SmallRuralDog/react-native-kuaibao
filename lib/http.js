export default {
    get(url, params) {
        if (params) {
            let paramsArray = [];
            //encodeURIComponent
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        headers = {
        };
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'GET',
                headers: headers,
            })
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => {
                    reject({status: -1});
                }).done();
        })
    },
}