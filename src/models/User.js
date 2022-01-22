import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: { type: String, required: true },
  location: String,
});

const User = mongoose.model('User', userSchema);

export default User;
