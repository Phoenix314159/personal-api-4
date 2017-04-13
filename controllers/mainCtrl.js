let user = require('../user');
let skillz = require('../skillz');
module.exports = {
    getUser: function (req, res) {
        res.status(200).json(user);
    },
    getName: function (req, res) {
        if (req.body.name) {
            user.name = req.body.name;
            res.status(200).json({name: user.name})
        }
        res.status(200).json({name: user.name});
    },
    getLocation: function (req, res) {
        res.status(200).json({location: user.location});
    },
    getOccupations: function (req, res) {
        if (req.query.order) {
            let v = req.query.order;
            if (v === 'asc') {
                let arr = user.occupations.sort();
                res.status(200).json({occupations: arr});
            } else if (v === 'desc') {
                res.status(200).json({occupations: user.occupations.sort().reverse()});
            }
        }else if(req.body){
            user.occupations.push(req.body.occupation);
            res.status(200).json(user.occupations);
        }
        else {
            res.status(200).json({occupations: user.occupations});
        }
    },
    getLatestOcc: function (req, res) {
        res.status(200).json({occupation: user.occupations[user.occupations.length - 1]});
    },
    getHobbies: function (req, res) {
        if (req.params.type) {
            let arr = [];
            for (let i = 0; i < user.hobbies.length; i++) {
                if (req.params.type === user.hobbies[i].type) {
                    arr.push(user.hobbies[i]);
                }
            }
            res.status(200).json({hobbies: arr});
        } else {
            res.status(200).json({hobbies: user.hobbies});
        }
    },
    getFamily: function (req, res) {
        let x = req.params.gender;
        if (x) {
            var arr = [], arr2 = [];
            for (let i = 0; i < user.family.length; i++) {
                if (x === user.family[i].gender) {
                    if (x === 'male') {
                        arr.push(user.family[i]);
                    } else {
                        arr2.push(user.family[i]);
                    }
                }
            }
        }
        if (x === 'male') {
            res.status(200).json({males: arr});
        } else if (x === 'female') {
            res.status(200).json({females: arr2});
        }
        else if (req.body) {
            user.family.push({name: req.body.name, relation: req.body.relation, gender: req.body.gender});
            res.status(200).json(user.family);
        } else {
            res.status(200).json({family: user.family});
        }


    },
    getRestaurants: function (req, res) {
        if (req.query.rating) {
            var arr = [];
            for (let i = 0; i < user.restaurants.length; i++) {
                if (parseInt(user.restaurants[i].rating) >= 2) {
                    arr.push(user.restaurants[i]);
                }
            }
            res.status(200).json({restaurants: arr});

        } else if (req.params.name) {
            var arr2 = [];
            for (let i = 0; i < user.restaurants.length; i++) {
                if (req.params.name === user.restaurants[i].name) {
                    arr2.push(user.restaurants[i]);
                }
            }
            res.status(200).json({restaurants: arr2});
        } else if (req.body) {
            user.restaurants.push({name: req.body.name, type: req.body.type, rating: req.body.rating});
            res.status(200).json({restaurants: user.restaurants});
        } else {
            res.status(200).json({restaurants: user.restaurants});
        }
    },
    updateName: function (req, res) {
        user.name = req.body.name;
        res.status(200).json(user.name);
    },
    newLocation: function (req, res) {
        let v = user.location = req.body.location;
        res.status(200).json({'new location': v});
    },
    newHobby: function (req, res) {
        user.hobbies.push({name: req.body.name, type: req.body.type});
        res.status(200).json(user.hobbies);

    },
    getSkillz: function (req, res) {
        if (req.query) {
            let arr = [];
            for (let i = 0; i < skillz.length; i++) {
                if (skillz[i].experience === 'Intermediate') {
                    arr.push(skillz[i]);
                }
            }
            res.status(200).json(arr);
        } else {
            res.status(200).json(skillz);
        }
    },
    deleteMember: function (req, res) {
        for(let i=0; i<user.family.length; i++){
            if(req.params.name === user.family[i].name){
                user.family.splice(i,1);
            }
        }
        res.status(200).json(user.family);
    }
}

