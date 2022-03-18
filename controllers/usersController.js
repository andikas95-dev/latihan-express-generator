const UsersModels = require('../models/usersModels');

exports.listUsers = (req, res) => {
  UsersModels.findAll().then((users) => {
    res.json(users);
  });
};
