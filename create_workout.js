let userData = {}
let split
let sets = 3
let reps
let pushDay = []
let pullDay = []
let legDay = []
let cardioDay = []

// The _e suffix indicates essential and _o indicates optional
let chest_e = ["Flat Bench Press", "Incline Bench Press", "Decline Bench Press"]
let chest_o = ["Pec Fly", "Cable Fly", "Dumbbell Fly"]
let back_e1 = ["Bent-over Row", "Seated Cable Row", "T-Bar Row"]
let back_e2 = ["Reverse Pec Dec", "Face Pull"]
let back_o1 = ["Lat Pulldown", "V-Bar Pulldown", "Pull-ups"]
let back_o2 = ["Barbell Shrugs", "Dumbbell Shrugs"]
let shoulder_e = ["Military Press", "Seated Dumbbell Press"]
let shoulder_o = ["Lateral Raise", "Cable Lateral Raise"]
let bicep_e = ["Dumbbell Curl", "Barbell Curl", "Cable Curl"]
let bicep_o = ["Hammer Curl", "Rope Curl", "Concentration Curl"]
let tricep_e = ["Overhead Dumbbell Extension", "Skullcrusher"]
let tricep_o = ["Cable Pushdown", "Close Grip Bench Press", "Bench Dips"]
let core_e = ["Hanging Knee Raise", "Crunches"]
let core_o = ["Russian Twists", "Plank"]
let leg_e = ["Back Squats", "Back Squats", "Leg Press"]
let leg_o = ["Lunges", "Leg Extension", "Hamstring Curls", "Calf Raises", "Glute Bridges"]
let cardio = ["Jumping Jacks", "Step-Ups", "Mountain Climbers", "Burpees"]

document.addEventListener('DOMContentLoaded', () => {
  // Get the form element
  const form = document.querySelector('form');

  // Add event listener to the form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    // Get input values
    const name = document.querySelector('#name').value;
    const age = parseInt(document.querySelector('#age').value);
    const gender = document.querySelector('#gender').value;
    const experience = document.querySelector('#experience').value;
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const goal = document.querySelector('#goal').value;

    // Store the values in variables
    userData = {
      name: name,
      age: age,
      gender: gender,
      experience: experience,
      weight: weight,
      height: height,
      goal: goal
    };

    // You can now use the userData object to process the form or send it to a server
    console.log(userData);

    // Optionally, show a confirmation message to the user
    // alert('Your workout details have been captured successfully!');

    // Reset form after submission
    form.reset();

    // Determine the workout split
    if (userData.goal == "fat-loss") {
      split = "PPLC"
      reps = 20
    }
    else{
      split = "PPL"
      reps = 12
    }

    // Push Day
    function pushWorkout(){
      pushDay.push(chest_e[Math.floor(Math.random() * chest_e.length)]) // Insert Exercise
      pushDay.push(sets + "x" + reps)                                   // Insert sets and reps
      pushDay.push(chest_o[Math.floor(Math.random() * chest_o.length)])
      pushDay.push(sets + "x" + reps)
      pushDay.push(shoulder_e[Math.floor(Math.random() * shoulder_e.length)])
      pushDay.push(sets + "x" + reps)
      pushDay.push(shoulder_o[Math.floor(Math.random() * shoulder_o.length)])
      pushDay.push(sets + "x" + reps)
      pushDay.push(tricep_e[Math.floor(Math.random() * tricep_e.length)])
      pushDay.push(sets + "x" + reps)
      pushDay.push(tricep_o[Math.floor(Math.random() * tricep_o.length)])
      pushDay.push(sets + "x" + reps)
      console.log(pushDay)
      pushDay = []
    }

    // Pull Day
    function pullWorkout(){
      console.log("yo")
      pullDay.push(back_e1[Math.floor(Math.random() * back_e1.length)])
      pullDay.push(sets + "x" + reps)
      pullDay.push(back_o1[Math.floor(Math.random() * back_o1.length)])
      pullDay.push(sets + "x" + reps)
      pullDay.push(back_e2[Math.floor(Math.random() * back_e2.length)])
      pullDay.push(sets + "x" + reps)
      pullDay.push(back_o2[Math.floor(Math.random() * back_o2.length)])
      pullDay.push(sets + "x" + reps)
      pullDay.push(bicep_e[Math.floor(Math.random() * tricep_e.length)])
      pullDay.push(sets + "x" + reps)
      pullDay.push(bicep_o[Math.floor(Math.random() * tricep_o.length)])
      pullDay.push(sets + "x" + reps)
      console.log(pullDay)
      pullDay = []
    }

    // Leg Day
    function legWorkout() {
      legDay.push(leg_e[Math.floor(Math.random() * leg_e.length)])
      legDay.push(sets + "x" + reps)
      legDay.push(leg_o[Math.floor(Math.random() * leg_o.length)])
      legDay.push(sets + "x" + reps)
      console.log(legDay)
      legDay = []
    }

    // Cardio Day
    function cardioWorkout() {
      cardioDay.push(cardio[Math.floor(Math.random() * cardio.length)])
      cardioDay.push(sets + "x" + reps)
      console.log(cardioDay)
      cardioDay = []
    }
    
    // Design workout according to split
    if (split == "PPL"){
      console.log("Reccomended workout split is Push-Pull-Legs")
      console.log("Day 1: ")
      pushWorkout()
      console.log("Day 2: ")
      pullWorkout()
      console.log("Day 3: ")
      legWorkout()
    }
    else {
      console.log("Reccomended workout split is Push-Pull-Legs-Cardio")
      console.log("Day 1: ")
      pushWorkout()
      console.log("Day 2: ")
      pullWorkout()
      console.log("Day 3: ")
      legWorkout()
      console.log("Day 4: ")
      cardioWorkout()
    }
    
  });
});