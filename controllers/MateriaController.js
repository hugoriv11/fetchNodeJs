const mongoose = require('mongoose');
const Materia = require("../models/Materia");
const AuthController = {};

Materia.test = function (req, res) {
    res.send("Greetings from the Test controller!");
}