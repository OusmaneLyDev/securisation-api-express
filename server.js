const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const app = express();

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limite chaque IP à 100 requêtes par fenêtre de 15 minutes
});
app.use(limiter);

const corsOptions = {
  origin: 'http://example.com', 
};
app.use(cors(corsOptions));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello world' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
