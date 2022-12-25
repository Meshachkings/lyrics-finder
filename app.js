import express from 'express';
import {lyrics_router} from './routes/lyrics.js';

const app = express();
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.use('/', lyrics_router)


app.listen(3000, ()=> {console.log('listening...')})