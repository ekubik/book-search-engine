const { AuthenticationError } = require("apollo-server-express");
const { User, Rock } = require("../models");
const { signToken } = require("../utils/auth");
