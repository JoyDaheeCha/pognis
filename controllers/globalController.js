import Product from "../models/Product";
import User from "../models/User";
import routes from "../routes";

export const home = async (req, res) => {
  try {
    const products = await Product.find({});
    res.render("home", { products });
  } catch (error) {
    console.log(error);
    res.render("home", { products: [] });
  }
};

export const getJoin = (req, res) => res.render("join");
export const postJoin = async (req, res) => {
  try {
    const {
      body: { id, password, password1, name, phoneFirst, phoneMiddle, phoneLast, emailId, emailDomain }
    } = req;
    const phoneNum = phoneFirst + phoneMiddle + phoneLast;
    const email = emailId + emailDomain;

    if (password !== password1) {
      res.status(400);
      res.render("join");
    } else {
      const user = await User.create({
        id,
        email,
        name,
        phoneNum
      });
      await User.register(user, password);
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const search = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  try {
    const products = await Product.find({
      productName: {
        $regex: searchingBy,
        $options: "i"
      }
    });
    res.render("search", { searchingBy, products });
  } catch (error) {
    res.render("search", { searchingBy, products: [] });
  }
};
