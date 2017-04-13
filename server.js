const express = require('express');
const bodyParser = require('body-parser');
const mainCtrl = require('./controllers/mainCtrl');
// const middleware = require('./controllers/middleware.js');
const app = express();
app.use(bodyParser.json());
// app.use(middleware.addHeaders);
app.use(express.static(__dirname + '/public'));

app.get('/api/user', mainCtrl.getUser);
app.get('/api/name', mainCtrl.getName);
app.get('/api/location', mainCtrl.getLocation);
app.get('/api/occupations', mainCtrl.getOccupations);
app.post('/api/occupation', mainCtrl.getOccupations);
app.get('/api/occupations/latest', mainCtrl.getLatestOcc);
app.get('/api/hobbies', mainCtrl.getHobbies);
app.get('/api/hobbies/:type', mainCtrl.getHobbies);
app.get('/api/family', mainCtrl.getFamily);
app.get('/api/family/:gender', mainCtrl.getFamily);
app.get('/api/restaurants',mainCtrl.getRestaurants);
app.get('/api/restaurants/:name', mainCtrl.getRestaurants);
app.put('/api/name', mainCtrl.updateName);
app.put('/api/location', mainCtrl.newLocation);
app.post('/api/hobbies', mainCtrl.newHobby);
app.post('/api/family', mainCtrl.getFamily);
app.post('/api/restaurants', mainCtrl.getRestaurants);
app.get('/api/skillz', mainCtrl.getSkillz);
app.delete('/api/delete/:name', mainCtrl.deleteMember);

app.listen(3059, function () {
    console.log('listening on port 3059');
})