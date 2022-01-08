import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 4000;

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');

const logger = morgan('dev');

const handleHome = (req, res) => {
  res.send('Hello Express');
};

app.use(logger);
app.get('/', handleHome);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
