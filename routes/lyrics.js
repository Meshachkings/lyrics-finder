// @ts-ignore
import { Router } from 'express';
import findLyrics from 'simple-find-lyrics';


const lyrics_router = Router();

lyrics_router.route('/')
.get((req, res) => {
    res.render('index')
})
.post(async (req, res) => {
    const s = req.body.search
    const lyrics = await findLyrics(s);
    // console.log(lyrics)
    res.render('result', {lyrics});
})




export {lyrics_router}