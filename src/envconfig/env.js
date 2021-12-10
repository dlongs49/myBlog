let baseUrl
let imgUrl
if (process.env.NODE_ENV === 'development') {
    baseUrl = ''
    imgUrl = ''
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = ''
    imgUrl = ''
}
export {
    baseUrl,
    imgUrl
}