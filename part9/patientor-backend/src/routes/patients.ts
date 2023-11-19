/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getEntries());
});

router.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation, entries } = req.body;
  const addedEntry = patientService.addPatient({
    name, 
    dateOfBirth, 
    ssn, 
    gender, 
    occupation,
    entries,
  });
  res.json(addedEntry);
});

router.get('/:id', (req, res) => {
  const patient = patientService.findById(String(req.params.id));

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

export default router;