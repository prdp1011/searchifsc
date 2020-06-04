const jwt = require('jsonwebtoken');
let all = {};
const  accessTokenSecret = 'mytesttoken';
all.accessTokenSecret = accessTokenSecret;

all.authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, accessTokenSecret, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }
          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
}
module.exports = all;
