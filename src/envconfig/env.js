let baseUrl
let imgUrl
if (process.env.NODE_ENV === 'development') {
    baseUrl = '//expro.dillonl.com'
    imgUrl = ''
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = '//expro.dillonl.com'
    imgUrl = ''
}
export {
    baseUrl,
    imgUrl
}