document.addEventListener("DOMContentLoaded", function () {
    let timerInterval;
  
    // Function to update the timer display
    function updateTimerDisplay(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const display = `${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
      document.getElementById("timer").innerText = display;
    }
  
    // Function to start the timer
    function startTimer(seconds) {
        // Check if the timer is already running
        if (timerInterval) {
            console.log("Timer is already running. Ignoring additional click.");
            return;
        }
    
        timerInterval = setInterval(function () {
            updateTimerDisplay(seconds);
            seconds--;
    
            if (seconds < 0) {
                clearInterval(timerInterval);
                document.getElementById("timer").innerText = "00:00";
                timerInterval = null; // Reset the timerInterval variable
            }
        }, 1000);
    }
    
  
    // Function to generate a random number between min and max (inclusive)
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
// Function to handle refresh button click
function handleRefreshButtonClick() {
    // Clear stored workout data
    localStorage.removeItem("workoutDetails");
    localStorage.removeItem("remainingTime");
  
    // Stop the timer
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = "00:00";
  
    // Clear the workout result
    document.getElementById("workoutResult").innerHTML = "";
  
    // Reload the page to reset everything
    window.location.reload();
  }
  
  // Attach the refresh button click event listener
  document.getElementById("refreshButton").addEventListener("click", handleRefreshButtonClick);

  
  
  
      

    const workouts = {
      Bodybuilding: [
            { name: "Bench Press", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Bicep Curls", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Tricep Dips", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Barbell Squats", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Deadlifts", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Military Press", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Pull-Ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Leg Press", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Dumbbell Rows", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Hammer Curls", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Skull Crushers", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Lunges", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Chest Flyes", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Lat Pulldowns", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Preacher Curls", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Tricep Kickbacks", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Leg Extensions", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Seated Rows", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Concentration Curls", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Close-Grip Bench Press", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Sumo Deadlifts", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Calf Raises", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Face Pulls", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Dumbbell Pullovers", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Standing Barbell Calf Raises", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Reverse Flyes", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Incline Dumbbell Curls", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Tricep Rope Pushdowns", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Romanian Deadlifts", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Hanging Leg Raises", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Planks", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
          ],

          Calisthenics: [
            { name: "Star Jumps", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Push-ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Sit-ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Squats", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Lunges", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Burpees", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Plank", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Mountain Climbers", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Pull-ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(5, 15) },
            { name: "Dips", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Jumping Jacks", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "High Knees", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Leg Raises", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Handstand Push-ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(5, 15) },
            { name: "Flutter Kicks", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Jump Rope", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Superman", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Box Jumps", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Bicycle Crunches", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Russian Twists", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Hindu Push-ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Wall Sit", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Inverted Rows", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Tricep Dips", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Calf Raises", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Bodyweight Squats", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Chin-ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(5, 15) },
            { name: "Seated Leg Lifts", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "Bear Crawls", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
            { name: "L-Sit", sets: getRandomNumber(3, 6), reps: getRandomNumber(10, 30) },
        ],
            // Include other categories (e.g., Bodybuilding, Crossfit, Powerlifting) and their exercises
             
        // Add more exercises as needed

      Crossfit: [
            { name: "Box Jumps", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Kettlebell Swings", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Burpees", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Double-Unders", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Wall Balls", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Toes-to-Bar", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Rowing", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Handstand Push-Ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Thrusters", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Box Pull-Ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Dumbbell Snatches", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Rope Climbs", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Sled Push", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Pistol Squats", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Handstand Walks", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "GHD Sit-Ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Medicine Ball Cleans", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Ring Dips", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Plyometric Box Exercises", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Sandbag Carries", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Bar Muscle-Ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Tire Flips", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Ski Erg", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Assault Bike", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Prowler Push", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Dumbbell Box Step-Ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Rowing Machine Sprints", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Plate Ground-to-Overhead", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Battling Ropes", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "L-Sits", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
          ],
          
        // Add more exercises as needed
        Powerlifting: [
            // Squat Variations
            { name: "Back Squat", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Front Squat", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Box Squat", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Pause Squat", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Overhead Squat", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
          
            // Deadlift Variations
            { name: "Conventional Deadlift", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Sumo Deadlift", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Romanian Deadlift", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Deficit Deadlift", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Trap Bar Deadlift", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
          
            // Bench Press Variations
            { name: "Flat Bench Press", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Incline Bench Press", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Decline Bench Press", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Close-Grip Bench Press", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Paused Bench Press", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
          
            // Additional Powerlifting Variations
            { name: "Overhead Press", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Bent Over Rows", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Good Mornings", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Pull-Ups", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
            { name: "Dumbbell Rows", sets: getRandomNumber(3, 6), reps: getRandomNumber(8, 15) },
          ],
          
    };

  // Function to generate a random workout based on user's choices
  function generateWorkout(name, activity, timeDomain, intensity) {
    // Get exercises based on the selected activity
    const activityExercises = workouts[activity];

    // Shuffle the exercises to provide a random workout
    const shuffledExercises = shuffleArray(activityExercises);

    // Calculate the number of exercises to include in the workout based on timeDomain
    const exercisesCount = Math.ceil((timeDomain / 15) * intensityMultiplier(intensity));

    // Select the first n exercises from the shuffled array
    const selectedExercises = shuffledExercises.slice(0, exercisesCount);

    // Create a string with the workout details
    let workoutDetails = `${name}'s Workout:<br>`;
    selectedExercises.forEach((exercise) => {
      workoutDetails += `${exercise.name} - ${exercise.sets} sets ${exercise.reps} reps<br>`;
    });

    // Display the generated workout in the HTML
    document.getElementById("workoutResult").innerHTML = workoutDetails;

    // Calculate the total time for the workout
    const totalTime = timeDomain * 60;

    // Start the timer
    startTimer(totalTime);

    // Store workout details and remaining time in local storage
    localStorage.setItem('workoutDetails', workoutDetails);
    localStorage.setItem('remainingTime', totalTime);
  }

  // Function to shuffle an array (Fisher-Yates algorithm)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to adjust intensity multiplier
  function intensityMultiplier(intensity) {
    switch (intensity) {
      case "Low":
        return 1.5;
      case "Medium":
        return 1.8;
      case "High":
        return 2.1;
      default:
        return 3;
    }
  }

 // Function to handle form submission
 function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get values from the form
    const name = document.getElementById("fname").value;
    const activity = document.querySelector('input[name="activity"]:checked').value;
    const timeDomain = document.querySelector('select[name="time_domain"]').value;
    const intensity = document.querySelector('input[name="intensity"]:checked').value;

    // Generate and display the workout
    generateWorkout(name, activity, timeDomain, intensity);
    

    

    // Show the workout result and set the background color
    const workoutResult = document.getElementById("workoutResult");
    workoutResult.style.display = "block";
    workoutResult.style.backgroundColor = "whitesmoke"; // Set your desired background color here
}



// Attach the form submission event listener
document.getElementById("workoutForm").addEventListener("submit", handleSubmit);



  // Check if there is stored workout data
  const storedWorkoutDetails = localStorage.getItem("workoutDetails");
  const storedRemainingTime = localStorage.getItem("remainingTime");

  if (storedWorkoutDetails && storedRemainingTime) {
    // Display the stored workout details
    document.getElementById("workoutResult").innerHTML = storedWorkoutDetails;

    // Calculate the remaining time and start the timer
    const remainingTime = Math.ceil(storedRemainingTime / 1000);
    startTimer(remainingTime);
  }
});
