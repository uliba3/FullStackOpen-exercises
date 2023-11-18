/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import patientsData from '../../data/patients';
import { v1 as uuid } from 'uuid';
import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry } from '../types';

const patients: PatientEntry[] = patientsData;

const getEntries = (): PatientEntry[] => {
  return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation
    }));
  };

const addPatient = ( entry: NewPatientEntry): PatientEntry => {
  const id = uuid();
    const newPatientEntry = {
      id: id,
      ...entry
    };
  return newPatientEntry;
};

const findById = (id: string): PatientEntry | undefined => {
  const entry = patients.find(d => d.id === id);
  return entry;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addPatient,
  findById
};