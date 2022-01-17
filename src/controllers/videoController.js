import Video from '../models/Video';

export const trending = async (req, res) => {
  const videos = await Video.find({});
  return res.render('home', { pageTitle: 'Home', videos });
};

export const watch = async (req, res) => {
  const {
    params: { id },
  } = req;
  const video = await Video.findById(id);

  if (video) {
    return res.render('watch', { pageTitle: video.title, video });
  }
  return res.render('404', { pageTitle: 'Video not found.' });
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

export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'Upload Video' });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(',').map((tag) => {
        tag.trim().startsWith('#') ? tag.trim() : `#${tag.trim()}`;
      }),
    });
    return res.redirect('/');
  } catch (error) {
    return res.render('upload', {
      pageTitle: 'Upload Video',
      errorMessage: error._message,
    });
  }
};
