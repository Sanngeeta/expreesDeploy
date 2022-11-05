var jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        var token = req.cookies.user

        var decode = jwt.verify(token, 'JozbizCamnpny')
        req.userData = decode
    

        next()
    } catch (error) {
        console.log(error);
        res.status(440 ).json({
            message: 'You are not logged '
        })
    }

}