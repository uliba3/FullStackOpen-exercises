import { useState, useEffect } from "react";
import { Patient } from "../types";
import { useParams } from 'react-router-dom';

interface Props {
    patients : Patient[]
}

const PatientPage = ({ patients } : Props) => {
    const [patient, setPatient] = useState<Patient | undefined>(undefined);
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        const foundPatient = patients.find((p: Patient) => p.id === id);
        if (foundPatient) {
            setPatient(foundPatient);
        }
    }, [patients, id]);
    console.log("id", id);
    console.log("patient", patient);
    if(!patient){
        return (
            <div>loading...</div>
        );
    }
    return (
        <div>
            <h2>{patient.name}</h2>
            <p>ssn: {patient.ssn}</p>
            <p>occupation: {patient.occupation}</p>
        </div>
    );
};

export default PatientPage;