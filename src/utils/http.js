import axios from './request'
/**
 *@params type: [application/x-www-form-urlencoded]
 *@params url: [请求地址]
 *@params data: [携带参数]
 **/
export function formPost(url, data) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            url: url,
            data: data
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}


/**
 *@params type: [application/json]
 *@params url: [请求地址]
 *@params data: [携带参数]
 **/
export function resPost(url,query,data) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            url: url,
            params: query,
            data,
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}


/**
 *@params type: [blob]
 *@params url: [请求地址]
 *@params data: [携带参数]
 **/
export function blobGet(url, data) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: url,
            data: data,
            responseType: 'blob'
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 *@params type: [blob]
 *@params url: [请求地址]
 *@params data: [携带参数]
 **/
export function blobPost(url, data) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: url,
            data: data,
            responseType: 'blob'
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}


/**
 *@params type: [application/json]
 *@params url: [请求地址]
 *@params data: [携带参数]
 **/
export function resGet(url, data) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: url,
            params: data,
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 *@params type: [multipart/form-data]
 *@params url: [请求地址]
 *@params data: [携带参数]
 **/
export function multPost(url, data) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: url,
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryrHyAYW2WBUNBT0lx'
            },
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
/**
 *@params type: [并行请求]
 *@params url: [请求地址]
 *@params data: [携带参数]
 **/
export function allPost(url) {
    return new Promise((resolve, reject) => {
        axios.all(url).then(axios.spread(function (a, b, c) {
            resolve([a, b, c])
        })).catch(err => {
            reject(err)
        })
    })
}
