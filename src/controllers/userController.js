import User from '../models/User';

export const getJoin = (req, res) => {
  return res.render('join', { pageTitle: 'Join' });
};

export const postJoin = async (req, res) => {
  const { name, email, username, password, password2, location } = req.body;
  await User.create({ name, email, username, password, password2, location });
  return res.redirect('/login');
};

export const login = (req, res) => {
  return res.send('Login');
};

export const logout = (req, res) => {
  return res.send('Logout');
};

export const edit = (req, res) => {
  return res.send('Edit user');
};

export const remove = (req, res) => {
  return res.send('Delete user');
};

export const see = (req, res) => {
  return res.send('See user');
};
