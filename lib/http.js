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
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
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