let videos = [
  {
    title: 'First Video',
    rating: 5,
    comments: 2,
    createdAt: '2 minutes ago',
    views: 59,
    id: 1,
  },
  {
    title: 'Second Video',
    rating: 5,
    comments: 2,
    createdAt: '2 minutes ago',
    views: 59,
    id: 2,
  },
  {
    title: 'Third Video',
    rating: 5,
    comments: 2,
    createdAt: '2 minutes ago',
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render('home', { pageTitle: 'Home', videos });
};

export const watch = (req, res) => {
  const {
    params: { id },
  } = req;
  const video = videos[id - 1];
  return res.render('watch', { pageTitle: `Watch ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const {
    params: { id },
  } = req;
  const video = videos[id - 1];
  return res.render('edit', { pageTitle: `Edit ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const {
    params: { id },
  } = req;
  const {
    body: { title: newTitle },
  } = req;
  videos[id - 1].title = newTitle;
  return res.redirect(`/videos/${id}`);
};
