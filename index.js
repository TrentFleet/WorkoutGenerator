const workoutData = {
    "male": {
        "calisthenics": [
            { exercise: "Push-ups", reps: 15, sets: 3 },
            { exercise: "Assisted Pull-ups", reps: 10, sets: 3 },
            { exercise: "Bodyweight Squats", reps: 20, sets: 3 },
            { exercise: "Dips", reps: 12, sets: 3 },
            { exercise: "L-sit Hold", reps: 1, sets: 3 },
            { exercise: "Handstand Push-ups", reps: 8, sets: 3 },
            { exercise: "Chin-ups", reps: 12, sets: 3 },
            { exercise: "Hanging Leg Raise", reps: 15, sets: 3 },
            { exercise: "Plyometric Push-ups", reps: 12, sets: 3 },
            { exercise: "Muscle-ups", reps: 8, sets: 3 },
            { exercise: "Box Jumps", reps: 15, sets: 3 },
            { exercise: "Pistol Squats", reps: 10, sets: 3 },
            { exercise: "Bicycle Crunches", reps: 20, sets: 3 },
            { exercise: "Reverse Grip Pull-ups", reps: 10, sets: 3 },
            { exercise: "Plank to Push-up", reps: 15, sets: 3 },
            { exercise: "Dragon Flags", reps: 8, sets: 3 },
            { exercise: "Burpees", reps: 15, sets: 3 },
            { exercise: "Inverted Rows", reps: 12, sets: 3 },
            { exercise: "Squat Jumps", reps: 15, sets: 3 },
            { exercise: "Russian Twists", reps: 20, sets: 3 },
        ],
        "bodybuilding": [
            { exercise: "Bench Press", reps: 12, sets: 4 },
            { exercise: "Barbell Rows", reps: 10, sets: 4 },
            { exercise: "Dumbbell Curls", reps: 12, sets: 3 },
            { exercise: "Tricep Dips", reps: 15, sets: 3 },
            { exercise: "Deadlifts", reps: 8, sets: 3 },
            { exercise: "Incline Bench Press", reps: 10, sets: 3 },
            { exercise: "Hammer Rows", reps: 10, sets: 4 },
            { exercise: "Leg Press", reps: 12, sets: 4 },
            { exercise: "Front Raises", reps: 12, sets: 3 },
            { exercise: "Calf Raises", reps: 15, sets: 3 },
            { exercise: "Military Press", reps: 12, sets: 3 },
            { exercise: "Skull Crushers", reps: 15, sets: 3 },
            { exercise: "Dumbbell Flyes", reps: 12, sets: 3 },
            { exercise: "Seated Leg Curls", reps: 12, sets: 4 },
            { exercise: "Reverse Grip Barbell Curls", reps: 10, sets: 3 },
            { exercise: "Plank", reps: 1, sets: 3 },
            { exercise: "Side Plank", reps: 30, sets: 3 },
            { exercise: "Leg Extensions", reps: 12, sets: 3 },
            { exercise: "Standing Calf Raises", reps: 15, sets: 3 },
            { exercise: "Hanging Knee Raise", reps: 15, sets: 3 },
        ],

        "crossfit": [
            { exercise: "Double-Unders", reps: 50, sets: 3 },
            { exercise: "Box Jumps", reps: 20, sets: 3 },
            { exercise: "Kettlebell Swings", reps: 15, sets: 3 },
            { exercise: "Thrusters", reps: 12, sets: 3 },
            { exercise: "Burpees", reps: 15, sets: 3 },
            { exercise: "Toes-to-Bar", reps: 12, sets: 3 },
            { exercise: "Handstand Push-ups", reps: 10, sets: 3 },
            { exercise: "Power Cleans", reps: 8, sets: 3 },
            { exercise: "Rowing (Calories)", reps: 20, sets: 3 },
            { exercise: "Wall Balls", reps: 20, sets: 3 },
            { exercise: "Pull-ups", reps: 15, sets: 3 },
            { exercise: "Muscle-ups", reps: 8, sets: 3 },
            { exercise: "Overhead Squats", reps: 10, sets: 3 },
            { exercise: "Sprint Intervals", reps: "30 seconds", sets: 5 },
            { exercise: "GHD Sit-ups", reps: 15, sets: 3 },
            { exercise: "Rope Climbs", reps: 3, sets: 3 },
            { exercise: "Dumbbell Snatches", reps: 12, sets: 3 },
            { exercise: "Plyo Push-ups", reps: 10, sets: 3 },
            { exercise: "Farmers Carry", reps: "100 meters", sets: 3 },
            { exercise: "Assault Bike (Calories)", reps: 15, sets: 3 },
        ],
        "hybrid": [
            { exercise: "Deadlifts", reps: 10, sets: 4 },
            { exercise: "Box Jumps", reps: 15, sets: 3 },
            { exercise: "Kettlebell Swings", reps: 12, sets: 3 },
            { exercise: "Battle Ropes", reps: "30 seconds", sets: 4 },
            { exercise: "Turkish Get-ups", reps: 8, sets: 3 },
            { exercise: "Medicine Ball Slams", reps: 15, sets: 3 },
            { exercise: "Sled Push", reps: "50 meters", sets: 4 },
            { exercise: "Pull-ups", reps: 12, sets: 3 },
            { exercise: "Bear Crawls", reps: "20 meters", sets: 4 },
            { exercise: "Inverted Rows", reps: 12, sets: 3 },
            { exercise: "Jumping Lunges", reps: 20, sets: 3 },
            { exercise: "TRX Rows", reps: 15, sets: 3 },
            { exercise: "Squat Jumps", reps: 15, sets: 3 },
            { exercise: "Plank Variations", reps: "1 minute", sets: 3 },
            { exercise: "Bicep Curl to Shoulder Press", reps: 12, sets: 3 },
            { exercise: "Hanging Leg Raises", reps: 15, sets: 3 },
            { exercise: "Box Squats", reps: 12, sets: 4 },
            { exercise: "Push-up Variations", reps: 15, sets: 3 },
            { exercise: "Farmers Carry", reps: "100 meters", sets: 3 },
            { exercise: "Dumbbell Lunges", reps: 12, sets: 3 },
        ],

        "endurance": [
            { exercise: "Running", reps: "5 kilometers", sets: 1 },
            { exercise: "Cycling", reps: "10 kilometers", sets: 1 },
            { exercise: "Rowing", reps: "2000 meters", sets: 1 },
            { exercise: "Swimming", reps: "500 meters", sets: 1 },
            { exercise: "Jump Rope", reps: "5 minutes", sets: 1 },
            { exercise: "High-Intensity Interval Training (HIIT)", reps: "20 minutes", sets: 1 },
            { exercise: "Burpees", reps: 15, sets: 3 },
            { exercise: "Mountain Climbers", reps: 20, sets: 3 },
            { exercise: "Sprinting", reps: "100 meters", sets: 10 },
            { exercise: "Box Jumps", reps: 15, sets: 3 },
            { exercise: "Circuit Training", reps: "30 minutes", sets: 1 },
            { exercise: "Hiking", reps: "5 kilometers", sets: 1 },
            { exercise: "Elliptical Trainer", reps: "30 minutes", sets: 1 },
            { exercise: "Jumping Jacks", reps: 50, sets: 3 },
            { exercise: "Cross-country Skiing", reps: "5 kilometers", sets: 1 },
            { exercise: "Stair Climbing", reps: "10 floors", sets: 3 },
            { exercise: "Boxing", reps: "3 rounds", sets: 1 },
            { exercise: "Trail Running", reps: "5 kilometers", sets: 1 },
            { exercise: "Kettlebell Swings", reps: 20, sets: 3 },
            { exercise: "Battle Ropes", reps: "30 seconds", sets: 3 },
        ],
        
    },
    "female": {
        "calisthenics": [
            { exercise: "Modified Push-ups", reps: 12, sets: 3 },
            { exercise: "Assisted Pull-ups", reps: 8, sets: 3 },
            { exercise: "Bodyweight Squats", reps: 15, sets: 3 },
            { exercise: "Tricep Dips", reps: 10, sets: 3 },
            { exercise: "L-sit Hold", reps: 1, sets: 3 },
            { exercise: "Handstand Practice", reps: "5 minutes", sets: 3 },
            { exercise: "Chin-ups", reps: 10, sets: 3 },
            { exercise: "Hanging Leg Raise", reps: 12, sets: 3 },
            { exercise: "Plyometric Push-ups", reps: 10, sets: 3 },
            { exercise: "Jumping Lunges", reps: 15, sets: 3 },
            // ... (other exercises)
        ],
        "bodybuilding": [
            { exercise: "Dumbbell Bench Press", reps: 12, sets: 4 },
            { exercise: "Bent Over Rows", reps: 10, sets: 4 },
            { exercise: "Dumbbell Bicep Curls", reps: 12, sets: 3 },
            { exercise: "Tricep Kickbacks", reps: 15, sets: 3 },
            { exercise: "Deadlifts", reps: 8, sets: 3 },
            { exercise: "Incline Dumbbell Press", reps: 10, sets: 3 },
            { exercise: "Lat Pulldowns", reps: 10, sets: 4 },
            { exercise: "Leg Press", reps: 12, sets: 4 },
            { exercise: "Lateral Raises", reps: 12, sets: 3 },
            { exercise: "Calf Raises", reps: 15, sets: 3 },
            { exercise: "Military Press", reps: 12, sets: 3 },
            { exercise: "Skull Crushers", reps: 15, sets: 3 },
            { exercise: "Dumbbell Flyes", reps: 12, sets: 3 },
            { exercise: "Seated Leg Curls", reps: 12, sets: 4 },
            { exercise: "Reverse Grip Dumbbell Curls", reps: 10, sets: 3 },
            { exercise: "Plank", reps: 1, sets: 3 },
            { exercise: "Side Plank", reps: 30, sets: 3 },
            { exercise: "Leg Extensions", reps: 12, sets: 3 },
            { exercise: "Standing Calf Raises", reps: 15, sets: 3 },
            { exercise: "Hanging Knee Raise", reps: 15, sets: 3 },
        ],
        
        "crossfit": [
            { exercise: "Single-Unders", reps: 100, sets: 3 },
            { exercise: "Box Jumps", reps: 15, sets: 3 },
            { exercise: "Kettlebell Swings", reps: 12, sets: 3 },
            { exercise: "Wall Balls", reps: 15, sets: 3 },
            { exercise: "Burpees", reps: 20, sets: 3 },
            { exercise: "Toes-to-Bar", reps: 10, sets: 3 },
            { exercise: "Handstand Push-ups", reps: 8, sets: 3 },
            { exercise: "Dumbbell Cleans", reps: 10, sets: 3 },
            { exercise: "Rowing (Calories)", reps: 15, sets: 3 },
            { exercise: "Power Snatches", reps: 8, sets: 3 },
            { exercise: "Pull-ups", reps: 12, sets: 3 },
            { exercise: "Ring Dips", reps: 10, sets: 3 },
            { exercise: "Overhead Squats", reps: 8, sets: 3 },
            { exercise: "Sprint Intervals", reps: "30 seconds", sets: 5 },
            { exercise: "GHD Sit-ups", reps: 15, sets: 3 },
            { exercise: "Rope Climbs", reps: 2, sets: 3 },
            { exercise: "Dumbbell Snatches", reps: 12, sets: 3 },
            { exercise: "Box Pistols", reps: 10, sets: 3 },
            { exercise: "Farmers Carry", reps: "100 meters", sets: 3 },
            { exercise: "Assault Bike (Calories)", reps: 12, sets: 3 },   
        ],
        
        "hybrid": [
            { exercise: "Single-Unders", reps: 100, sets: 3 },
            { exercise: "Deadlifts", reps: 10, sets: 4 },
            { exercise: "Box Jumps", reps: 15, sets: 3 },
            { exercise: "Kettlebell Swings", reps: 12, sets: 3 },
            { exercise: "Battle Ropes", reps: "30 seconds", sets: 4 },
            { exercise: "Turkish Get-ups", reps: 8, sets: 3 },
            { exercise: "Medicine Ball Slams", reps: 15, sets: 3 },
            { exercise: "Sled Push", reps: "50 meters", sets: 4 },
            { exercise: "Pull-ups", reps: 12, sets: 3 },
            { exercise: "Bear Crawls", reps: "20 meters", sets: 4 },
            { exercise: "Inverted Rows", reps: 12, sets: 3 },
            { exercise: "Jumping Lunges", reps: 20, sets: 3 },
            { exercise: "TRX Rows", reps: 15, sets: 3 },
            { exercise: "Squat Jumps", reps: 15, sets: 3 },
            { exercise: "Plank Variations", reps: "1 minute", sets: 3 },
            { exercise: "Bicep Curl to Shoulder Press", reps: 12, sets: 3 },
            { exercise: "Hanging Leg Raises", reps: 15, sets: 3 },
            { exercise: "Box Squats", reps: 12, sets: 4 },
            { exercise: "Push-up Variations", reps: 15, sets: 3 },
            { exercise: "Farmers Carry", reps: "100 meters", sets: 3 },
            { exercise: "Dumbbell Lunges", reps: 12, sets: 3 },
        ],
        "endurance": [
            { exercise: "Running", reps: "5 kilometers", sets: 1 },
            { exercise: "Cycling", reps: "10 kilometers", sets: 1 },
            { exercise: "Rowing", reps: "2000 meters", sets: 1 },
            { exercise: "Swimming", reps: "500 meters", sets: 1 },
            { exercise: "Jump Rope", reps: "5 minutes", sets: 1 },
            { exercise: "High-Intensity Interval Training (HIIT)", reps: "20 minutes", sets: 1 },
            { exercise: "Burpees", reps: 15, sets: 3 },
            { exercise: "Mountain Climbers", reps: 20, sets: 3 },
            { exercise: "Sprinting", reps: "100 meters", sets: 10 },
            { exercise: "Box Jumps", reps: 15, sets: 3 },
            { exercise: "Circuit Training", reps: "30 minutes", sets: 1 },
            { exercise: "Hiking", reps: "5 kilometers", sets: 1 },
            { exercise: "Elliptical Trainer", reps: "30 minutes", sets: 1 },
            { exercise: "Jumping Jacks", reps: 50, sets: 3 },
            { exercise: "Cross-country Skiing", reps: "5 kilometers", sets: 1 },
            { exercise: "Stair Climbing", reps: "10 floors", sets: 3 },
            { exercise: "Boxing", reps: "3 rounds", sets: 1 },
            { exercise: "Trail Running", reps: "5 kilometers", sets: 1 },
            { exercise: "Kettlebell Swings", reps: 20, sets: 3 },
            { exercise: "Battle Ropes", reps: "30 seconds", sets: 3 }, ]

        },
        "other": {
            "calisthenics": [
                { exercise: "Modified Push-ups", reps: 12, sets: 3 },
                { exercise: "Assisted Pull-ups", reps: 8, sets: 3 },
                { exercise: "Bodyweight Squats", reps: 15, sets: 3 },
                { exercise: "Tricep Dips", reps: 10, sets: 3 },
                { exercise: "L-sit Hold", reps: 1, sets: 3 },
                { exercise: "Handstand Practice", reps: "5 minutes", sets: 3 },
                { exercise: "Chin-ups", reps: 10, sets: 3 },
                { exercise: "Hanging Leg Raise", reps: 12, sets: 3 },
                { exercise: "Plyometric Push-ups", reps: 10, sets: 3 },
                { exercise: "Jumping Lunges", reps: 15, sets: 3 },
                // ... (other exercises)
            ],
            "bodybuilding": [
                { exercise: "Dumbbell Bench Press", reps: 12, sets: 4 },
                { exercise: "Bent Over Rows", reps: 10, sets: 4 },
                { exercise: "Dumbbell Bicep Curls", reps: 12, sets: 3 },
                { exercise: "Tricep Kickbacks", reps: 15, sets: 3 },
                { exercise: "Deadlifts", reps: 8, sets: 3 },
                { exercise: "Incline Dumbbell Press", reps: 10, sets: 3 },
                { exercise: "Lat Pulldowns", reps: 10, sets: 4 },
                { exercise: "Leg Press", reps: 12, sets: 4 },
                { exercise: "Lateral Raises", reps: 12, sets: 3 },
                { exercise: "Calf Raises", reps: 15, sets: 3 },
                { exercise: "Military Press", reps: 12, sets: 3 },
                { exercise: "Skull Crushers", reps: 15, sets: 3 },
                { exercise: "Dumbbell Flyes", reps: 12, sets: 3 },
                { exercise: "Seated Leg Curls", reps: 12, sets: 4 },
                { exercise: "Reverse Grip Dumbbell Curls", reps: 10, sets: 3 },
                { exercise: "Plank", reps: 1, sets: 3 },
                { exercise: "Side Plank", reps: 30, sets: 3 },
                { exercise: "Leg Extensions", reps: 12, sets: 3 },
                { exercise: "Standing Calf Raises", reps: 15, sets: 3 },
                { exercise: "Hanging Knee Raise", reps: 15, sets: 3 },
            ],
            
            "crossfit": [
                { exercise: "Single-Unders", reps: 100, sets: 3 },
                { exercise: "Box Jumps", reps: 15, sets: 3 },
                { exercise: "Kettlebell Swings", reps: 12, sets: 3 },
                { exercise: "Wall Balls", reps: 15, sets: 3 },
                { exercise: "Burpees", reps: 20, sets: 3 },
                { exercise: "Toes-to-Bar", reps: 10, sets: 3 },
                { exercise: "Handstand Push-ups", reps: 8, sets: 3 },
                { exercise: "Dumbbell Cleans", reps: 10, sets: 3 },
                { exercise: "Rowing (Calories)", reps: 15, sets: 3 },
                { exercise: "Power Snatches", reps: 8, sets: 3 },
                { exercise: "Pull-ups", reps: 12, sets: 3 },
                { exercise: "Ring Dips", reps: 10, sets: 3 },
                { exercise: "Overhead Squats", reps: 8, sets: 3 },
                { exercise: "Sprint Intervals", reps: "30 seconds", sets: 5 },
                { exercise: "GHD Sit-ups", reps: 15, sets: 3 },
                { exercise: "Rope Climbs", reps: 2, sets: 3 },
                { exercise: "Dumbbell Snatches", reps: 12, sets: 3 },
                { exercise: "Box Pistols", reps: 10, sets: 3 },
                { exercise: "Farmers Carry", reps: "100 meters", sets: 3 },
                { exercise: "Assault Bike (Calories)", reps: 12, sets: 3 },   
            ],
            
            "hybrid": [
                { exercise: "Single-Unders", reps: 100, sets: 3 },
                { exercise: "Deadlifts", reps: 10, sets: 4 },
                { exercise: "Box Jumps", reps: 15, sets: 3 },
                { exercise: "Kettlebell Swings", reps: 12, sets: 3 },
                { exercise: "Battle Ropes", reps: "30 seconds", sets: 4 },
                { exercise: "Turkish Get-ups", reps: 8, sets: 3 },
                { exercise: "Medicine Ball Slams", reps: 15, sets: 3 },
                { exercise: "Sled Push", reps: "50 meters", sets: 4 },
                { exercise: "Pull-ups", reps: 12, sets: 3 },
                { exercise: "Bear Crawls", reps: "20 meters", sets: 4 },
                { exercise: "Inverted Rows", reps: 12, sets: 3 },
                { exercise: "Jumping Lunges", reps: 20, sets: 3 },
                { exercise: "TRX Rows", reps: 15, sets: 3 },
                { exercise: "Squat Jumps", reps: 15, sets: 3 },
                { exercise: "Plank Variations", reps: "1 minute", sets: 3 },
                { exercise: "Bicep Curl to Shoulder Press", reps: 12, sets: 3 },
                { exercise: "Hanging Leg Raises", reps: 15, sets: 3 },
                { exercise: "Box Squats", reps: 12, sets: 4 },
                { exercise: "Push-up Variations", reps: 15, sets: 3 },
                { exercise: "Farmers Carry", reps: "100 meters", sets: 3 },
                { exercise: "Dumbbell Lunges", reps: 12, sets: 3 },
            ],
            "endurance": [
                { exercise: "Running", reps: "5 kilometers", sets: 1 },
                { exercise: "Cycling", reps: "10 kilometers", sets: 1 },
                { exercise: "Rowing", reps: "2000 meters", sets: 1 },
                { exercise: "Swimming", reps: "500 meters", sets: 1 },
                { exercise: "Jump Rope", reps: "5 minutes", sets: 1 },
                { exercise: "High-Intensity Interval Training (HIIT)", reps: "20 minutes", sets: 1 },
                { exercise: "Burpees", reps: 15, sets: 3 },
                { exercise: "Mountain Climbers", reps: 20, sets: 3 },
                { exercise: "Sprinting", reps: "100 meters", sets: 10 },
                { exercise: "Box Jumps", reps: 15, sets: 3 },
                { exercise: "Circuit Training", reps: "30 minutes", sets: 1 },
                { exercise: "Hiking", reps: "5 kilometers", sets: 1 },
                { exercise: "Elliptical Trainer", reps: "30 minutes", sets: 1 },
                { exercise: "Jumping Jacks", reps: 50, sets: 3 },
                { exercise: "Cross-country Skiing", reps: "5 kilometers", sets: 1 },
                { exercise: "Stair Climbing", reps: "10 floors", sets: 3 },
                { exercise: "Boxing", reps: "3 rounds", sets: 1 },
                { exercise: "Trail Running", reps: "5 kilometers", sets: 1 },
                { exercise: "Kettlebell Swings", reps: 20, sets: 3 },
                { exercise: "Battle Ropes", reps: "30 seconds", sets: 3 }, ]
    
            },
        


     
    
};

function generateRandomWorkout(exercises, exerciseCount,) {
    const workout = [];
    
    // Create a copy of the exercises array to avoid modifying the original array
    const availableExercises = [...exercises];

    for (let i = 0; i < exerciseCount; i++) {
        // Check if there are still available exercises
        if (availableExercises.length === 0) {
            break;  // Exit the loop if all exercises have been used
        }

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * availableExercises.length);

        // Add the selected exercise to the workout
        workout.push(availableExercises[randomIndex]);

        // Remove the selected exercise from the available exercises
        availableExercises.splice(randomIndex, 1);

        
    }

    return workout;
}

function displayWorkout(name, workout) {
    const workoutList = document.getElementById("workoutList");
    const workoutHeader = document.getElementById("workoutHeader");

    // Clear previous workout data
    workoutList.innerHTML = "";

    // Display the header
    workoutHeader.textContent = `${name}'s Workout Programme:`;

    // Create list items for each exercise
    workout.forEach(exercise => {
        const exerciseItem = document.createElement("li");
        exerciseItem.textContent = `${exercise.exercise} - ${exercise.reps} reps - ${exercise.sets} sets`;
        workoutList.appendChild(exerciseItem);
    });
}

function generateWorkout() {
    const name = document.getElementById("name").value;
    const genderSelect = document.getElementById("gender");
    const workoutTypeSelect = document.getElementById("type");
    const workoutContainer = document.getElementById("workoutContainer");

    document.getElementById('workoutList').classList.add('show-border');
    document.getElementById('workoutHeader').style.display = 'block';


    // Check if all fields are filled
    if (name && genderSelect.value && workoutTypeSelect.value) {
        const gender = genderSelect.value;
        const workoutType = workoutTypeSelect.value;
        const selectedWorkouts = workoutData[gender] ? workoutData[gender][workoutType] : null;

        // Add console.log statements here
        console.log("Gender:", gender);
        console.log("Workout Type:", workoutType);
        console.log("Selected Workouts:", selectedWorkouts);

        // Check if selected workouts are available
        if (selectedWorkouts) {
            const workoutDuration = selectedWorkouts.length;  // Assuming 1 set per exercise

            // Generate workout based on selected options
            const generatedWorkout = generateRandomWorkout(selectedWorkouts, 6, );

            // Display the workout
            displayWorkout(name, generatedWorkout);

            // Scroll to the workout container
            workoutContainer.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert("Invalid gender or workout type selected");
        }
    } else {
        alert("Hi There Please fill in all fields and try again Thanks!");
    }
}

// Set up event listener for the "Generate Workout" button
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateWorkout);

// Function to refresh the page
function refreshPage() {
    location.reload();
}
