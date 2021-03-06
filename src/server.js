import express from 'express';
import routesBook from './controllers/books';
import routesCategory from './controllers/categorys';
import routesAuthor from './controllers/authors';
import routesUser from './controllers/users';
import routesAuth from './controllers/auth';
import routesMaterial from './controllers/materials';
import routesRating from './controllers/ratings';
import routesLoan from './controllers/loans';
import routesFine from './controllers/fines';
import routesReservation from './controllers/reservations';
import cors from 'cors'
import bodyParser from 'body-parser';


let app = express();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(bodyParser.json({limit: '50mb'}));

app.use(cors());

app.use(express.static('uploads'));


app.use('/',routesUser);
app.use('/',routesAuth);
app.use('/',routesBook);
app.use('/',routesCategory);
app.use('/',routesAuthor);
app.use('/',routesMaterial);
app.use('/',routesRating);
app.use('/',routesLoan);;
app.use('/',routesFine);
app.use('/',routesReservation);



app.listen(3000,() => {
    console.log('A aplicação está rodando na porta 3000');
});

