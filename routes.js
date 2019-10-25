// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User
const USERS = "/users";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CART = "/cart";

// Customer support
const CS = "/customer-support";
const ALL_CS = "/all-cs-support";
const FAQ = "/faq";
const NOTICE = "/notice";
const EVENTS = "/events";
const REVIEWS = "/reviews";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  changePassword: CHANGE_PASSWORD,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  cart: CART,
  cs: CS,
  allcs: ALL_CS,
  faq: FAQ,
  notice: NOTICE,
  events: EVENTS,
  reviews: REVIEWS
};

export default routes;
