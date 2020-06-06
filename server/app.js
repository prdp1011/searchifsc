//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
const bank = require('./routes/bank.route');
const auth = require('./routes/auth.route');
const main = require('./routes/main.route');
const common = require('./common');
const serveStatic = require('serve-static')

const app = express();
app.use(cors())

const mongoose = require('mongoose');
mongoose.connect('mongodb://testmongo:abc123@ds145486.mlab.com:45486/bankdetails', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
db.once('open', () => {
  console.log(`we're connected!`);
});
db.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
  process.exit(1);
});
// app.use(serveStatic('dist/testBank/', { 'index': ['index.html', 'index.htm'] }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/bank', common.authenticateJWT, bank);
app.use('/main', main);
app.use('/app', auth);

app.listen(process.env.PORT || 3000, () => {
  console.log('server started on port 3000');
});

