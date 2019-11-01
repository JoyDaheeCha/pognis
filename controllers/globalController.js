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
