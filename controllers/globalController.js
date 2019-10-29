import { products } from "../db";

export const home = (req, res) => {
  res.render("home", { products });
};

export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const search = (req, res) => res.render("search");
