function extractToken(req) {
    if (
        req.headers.Authorization &&
        req.headers.Authorization.split(' ')[0] === 'Bearer'
    ) {
        return req.headers.Authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
        return req.query.token
    }
    return null
}
module.exports = extractToken
