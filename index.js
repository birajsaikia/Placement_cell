const express = require('express');
const app = express();
const port = 8000;
var bodyParser = require('body-parser')
let mongoose = require('./confic/mongoose')
let cookieParser = require('cookie-parser');
let session = require('express-session');
const passport  = require('passport');
const passportLocal = require('./confic/passport-local-strategy');
let Mongoosestore = require('connect-mongo');


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.static('./assets'));


app.set('view engine', 'ejs');
app.set('views', './views');



// app.use(
//     session({
//       name: "codial",
//       secret: "supersecret",
//       saveUninitialized: false,
//       resave: false,
//       store: Mongoosestore.create({
//         mongoUrl: "mongodb://0.0.0.0:27017/placement",
//       }),
//       cookie: {
//         maxAge: 100 * 60 * 100,
//       },
//     })
//   );

app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: "supersecret" ,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    //mongostore is used to store the session cookie in the db
    // store: Mongoosestore.create({             
    //     mongoUrl: `mongodb://0.0.0.0:27017/placement`,
    //     autoRemove: 'disabled'
//     // },
//     function(err){
//         console.log(err || 'connect-mongodb setup ok');
//     })
// }
}))


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/', require('./router'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
