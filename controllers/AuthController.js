const { request } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const isEmail = require("isemail");
const dns = require("dns");

module.exports = class AuthController {
  static login(req, res) {
    res.render("auth/login");
  }

  static register(req, res) {
    res.render("auth/register");
  }

  static async registerPost(req, res) {
    const { name, email, password, confirmpassword } = req.body;

    // email validation
    if (!isEmail.validate(email)) {
      req.flash("message", "O e-mail não é válido!");
      res.render("auth/register");

      return;
    }

    if (password !== confirmpassword) {
      req.flash("message", "As senhas não conferem. Tente novamente!");
      res.render("auth/register");

      return;
    }

    // check if user exists
    const checkIfUserExists = await User.findOne({ where: { email } });

    if (checkIfUserExists) {
      req.flash("message", "O e-mail já está em uso!");
      res.render("auth/register");

      return;
    }

    // create a password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = {
      name,
      email,
      password: hashedPassword,
    };

    try {
      const createdUser = await User.create(user);

      // initialize session
      req.session.userid = createdUser.id;

      req.flash("message", "Cadastro realizado com sucesso!");

      req.session.save(() => {
        res.redirect("/");
      });
    } catch (err) {
      console.log(err);
    }
  }

  static logout(req, res) {
    req.session.destroy();
    res.redirect("/login");
  }

  static async loginPost(req, res) {
    const { email, password } = req.body;

    // check if user exists
    const checkIfUserExists = await User.findOne({ where: { email } });

    if (!checkIfUserExists) {
      req.flash("message", "Usuário não encontrado!");
      res.redirect("/login");

      return;
    }

    // check if password is correct
    const isPasswordCorrect = bcrypt.compareSync(
      password,
      checkIfUserExists.password
    );

    if (!isPasswordCorrect) {
      req.flash("message", "Senha incorreta!");
      res.redirect("/login");

      return;
    }

    // initialize session
    req.session.userid = checkIfUserExists.id;

    req.flash("message", "Login realizado com sucesso!");

    req.session.save(() => {
      res.redirect("/");
    });
  }
};
