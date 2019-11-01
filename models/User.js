import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatarUrl: String,
  name: {
    type: String,
    required: true
  },
  phoneNum: {
    type: String,
    required: true
  },
  facebookId: String,
  naverId: String,
  kakaotalkId: String
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "id" });

const model = mongoose.model("User", UserSchema);

export default model;
