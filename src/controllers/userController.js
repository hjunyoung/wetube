import User from '../models/User';

export const getJoin = (req, res) => {
  return res.render('join', { pageTitle: 'Join' });
};

export const postJoin = async (req, res) => {
  const { name, email, username, password, password2, location } = req.body;
  const pageTitle = 'Join';

  if (password !== password2) {
    return res.status(400).render('join', {
      pageTitle,
      errorMessage: 'Password confirmation does not match.',
    });
  }

  const exists = await User.exists({ username, email });
  if (exists) {
    return res.status(400).render('join', {
      pageTitle,
      errorMessage: 'Both Username and Email already taken.',
    });
  }

  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.status(400).render('join', {
      pageTitle,
      errorMessage: 'Username already taken.',
    });
  }

  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.status(400).render('join', {
      pageTitle,
      errorMessage: 'Email already taken.',
    });
  }

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
