import Product from "../models/Product";
import routes from "../routes";

export const getUploadProduct = (req, res) => res.render("uploadProduct");
export const postUploadProduct = async (req, res) => {
  const {
    body: { category, productName, previousPrice, currentPrice, discountRate, color, size, extraPrice, remainingNum },
    file: { path }
  } = req;
  console.log(req);
  const options = [];
  try {
    // push option values into options array
    color.forEach((__, idx) => {
      options.push({
        color: color[idx],
        size: size[idx],
        extraPrice: extraPrice[idx],
        remainingNum: remainingNum[idx]
      });
    });
    // add product info to DB
    const newProduct = await Product.create({
      category,
      productName,
      imageUrl: path,
      previousPrice,
      currentPrice,
      discountRate,
      options
    });
    console.log(newProduct);
    res.redirect(`/admin${routes.uploadProduct}`);
  } catch (error) {
    console.log(error);
  }
};
