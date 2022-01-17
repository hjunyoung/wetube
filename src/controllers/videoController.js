import Video from '../models/Video';

export const trending = async (req, res) => {
  const videos = await Video.find({});
  return res.render('home', { pageTitle: 'Home', videos });
};

export const watch = (req, res) => {
  const {
    params: { id },
  } = req;
  return res.render('watch', { pageTitle: `Watch` });
};

export const getEdit = (req, res) => {
  const {
    params: { id },
  } = req;
  return res.render('edit', { pageTitle: `Edit` });
};

export const postEdit = (req, res) => {
  const {
    params: { id },
  } = req;
  const {
    body: { title: newTitle },
  } = req;
  return res.redirect(`/videos/${id}`);
};
