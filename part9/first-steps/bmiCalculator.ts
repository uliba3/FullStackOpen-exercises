export const calculateBmi = (h: number, w: number) => {
    const bmi = w/(h*h)*10000;
    if(bmi<18.5){
        return "Underweight";
    }else if(bmi >= 18.5 && bmi < 25){
        return "Normal range";
    }else if(bmi >= 25 && bmi < 30){
        return "Overweight";
    }else{
        return "Obese";
    }
}

const h: number = Number(process.argv[2])
const w: number = Number(process.argv[3])

console.log(calculateBmi(h, w));