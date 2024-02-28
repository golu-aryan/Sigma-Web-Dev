//The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school.Implement a javascript function that takes an array of student names and assigns them to one of the four houses (Gryffindor(length less than 6)), (Hufflepuff(length less than 8)),Ravenclaw((length less than 12)), or (Slytherine(length greater than or equal to 12)) based on the length of their names.

let students = ["Aryan", "Harry", "Nicholas", "Aventandor", "Akash", "Anubhav", "Batman", "Patrick", "Christian Bale", "Ben Afleck", "Robert Pattinson"];

let house = []

for (const student of students) {
    if (student.length < 6) {
        house.push("Gryffindor")
    }
    else if (student.length < 8) {
        house.push("Hufflepuff")
    }
    else if (student.log < 12) {
        house.push("Ravenclaw")
    }
    else {
        house.push("Slytherine")
    }
}

console.log(house);