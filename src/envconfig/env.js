let baseUrl
let imgUrl
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://expro.dillonl.com'
    imgUrl = ''
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://expro.dillonl.com'
    imgUrl = ''
}
export {
    baseUrl,
    imgUrl
}