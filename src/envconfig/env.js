let baseUrl
let imgUrl
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'https://www.dillonl.com'
    imgUrl = ''
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://www.dillonl.com'
    imgUrl = ''
}
export {
    baseUrl,
    imgUrl
}