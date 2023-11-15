import express from 'express';
import bodyParser from "body-parser";
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator'

const app = express();
app.use(bodyParser.json());

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
  try {
    res.send({
    weight: w,
    height: h,
    BMI: calculateBmi(h, w)
  });} catch(e) {
    res.status(400);
    res.send({ error: e.message });
  }
})

app.post('/exercises', (req, res) => {
  const daily_exercises = req.body.daily_exercises;
  const target = req.body.target;
  //const { daily_exercises, target } = req.body;
  console.log(req.body);
  if(!daily_exercises||!target) {
    res.status(400);
    res.send({ error: "parameters missing" });
  }
  try {
    const result = calculateExercises(target, daily_exercises);
    res.send({ result });
  } catch(e) {
    res.status(400);
    res.send({ error: e.message });
  }
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});