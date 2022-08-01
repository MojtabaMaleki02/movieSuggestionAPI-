const app = require('express')();
const PORT = 8080;

const movies = ["The Shawshank Redemption", "Schindler's List (1993)", "Raging Bull (1980)", "Casablanca (1942)","Citizen Kane (1941)","Gone with the Wind (1939)"," The Wizard of Oz (1939)"," One Flew Over the Cuckoo's Nest (1975)","Lawrence of Arabia (1962)","clara (2020)", "Midnight sun"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  

app.get(`/`,(req, res) =>{
    res.send({
        Name: `${movies[getRandomInt(movies.length)]}`
    })
});


app.listen(3000, () => console.log('listening on port 3000...'))   




