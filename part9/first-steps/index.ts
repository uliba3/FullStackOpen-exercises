import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const w = Number(req.query.weight);
  const h = Number(req.query.height);
  if(!h||!w){
    res.status(400);
    res.send({ error: 'missing parameter height or weight' });
  }
  res.send({
    weight: w,
    height: h,
    BMI: calculateBmi(h, w)
  });
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});