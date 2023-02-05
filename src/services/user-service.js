const jwt = require("jsonwebtoken");
const UserRepository = require("../repository/user-repository");
const { JWT_KEY } = require("../config/serverConfig");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong on service layer");
      throw error;
    }
  }

  async destroy(userId) {
    try {
      await this.userRepository.destroy(userId);
    } catch (error) {
      console.log("Something went wrong on service layer");
      throw error;
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
      return result;
    } catch (error) {
      console.log("Something went wrong on service layer: token creation");
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const result = jwt.verify(token, JWT_KEY);
      return result;
    } catch (error) {
      console.log(
        "Something went wrong on service layer: token verification: ",
        error.message
      );
      throw error;
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("Something went wrong on service layer: password check");
      throw error;
    }
  }

  async signIn(email, plainPassword) {
    try {
      const user = await this.userRepository.getByEmail(email);
      if (!user) {
        throw new Error("User not found");
      }
      const isPasswordCorrect = this.checkPassword(
        plainPassword,
        user.password
      );
      if (!isPasswordCorrect) {
        console.log("Password does not match");
        throw { error: "Incorrect password" };
      }
      const token = this.createToken({ email: user.email, id: user.id });
      return token;
    } catch (error) {
      console.log("Something went wrong on service layer: sign in");
      throw error;
    }
  }
}

module.exports = UserService;
