import Product from "../models/Product";

export const home = async (req, res) => {
  try {
    const products = await Product.find({});
    res.render("home", { products });
  } catch (error) {
    console.log(error);
    res.render("home", { products: [] });
  }
};

export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  const regExp = new RegExp(searchingBy, "i");
  const products = Products.filter(product => regExp.test(product.name));
  res.render("search", { searchingBy, products });
};
