import express from 'express';

const app = express();
app.use(express.static('public'));

app.get('/api/v1', (req, res) => {
  res.send('Respuesta main')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server runnig: http//localhost:${PORT}`);
});