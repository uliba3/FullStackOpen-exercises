interface result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (targetHours: number, hours: number[]) => {
    const periodLength = hours.length;
    const trainingDays = hours.filter(hour => hour > 0).length;
    const totalHours = hours.reduce((a, b) => a + b, 0);
    const targetTotalHours = targetHours*hours.length;
    let rating, ratingDescription;
    if(totalHours >= targetTotalHours){
        rating = 3;
        ratingDescription = "Well done!!";
    }else if(totalHours*2 > targetTotalHours){
        rating = 2;
        ratingDescription = "Not too bad but could be better";
    }else {
        rating = 1;
        ratingDescription = "Need more exercise";
    }
    const res: result = {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: totalHours >= targetTotalHours,
        rating: rating,
        ratingDescription: ratingDescription,
        target: targetHours,
        average: totalHours/periodLength
    }
    console.log(res);
}

const targetHours: number = Number(process.argv[2]);
const hours: number[] = process.argv.slice(3).map(Number);

calculateExercises(targetHours, hours);