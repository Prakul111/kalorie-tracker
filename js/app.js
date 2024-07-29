class CalorieTracker {
    constructor () {
        this._calorieLimit = 2000;
        this._totalCalories = 0;
        this._meals = [];
        this._workouts = [];

        this._displayCaloriesLimit();
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCalorieProgress();
    }   


    //Public Methods/API 
    addMeal (meal) {
        this._meals.push(meal);
        this._totalCalories += meal.calories;
        this.displayNewMeal(meal); 
        this._render();
    }
    addWorkout (workout) {
        this._meals.push(workout);
        this._totalCalories -= workout.calories;
        this._render();

        
    }
    // Private Methods

    _displayCaloriesTotal() {
        const totalCaloriesEl = document.getElementById('calories-total');
        totalCaloriesEl.innerHTML = this._totalCalories;
    }

    _displayCaloriesLimit() {
        const calorieLimitEl = document.getElementById('calories-limit');
        calorieLimitEl.innerHTML = this._calorieLimit;
    }

    _displayCaloriesConsumed() {
        const caloriesConsumedEl = document.getElementById('calories-consumed');
        
        const  consumed = this._meals.reduce((total, meal) => total + meal.calories, 0 );

        caloriesConsumedEl.innerHtml = consumed;    
    }

    _displayCaloriesBurned() {
        const caloriesBurnedEl = document.getElementById('calories-burned');
        
        const  burned = this._workouts.reduce((total, workout) => total + workout       .calories, 0 );

        caloriesBurnedEl.innerHtml = burned;    
    }

    _displayCaloriesRemaining() {
        const caloriesRemainingEl = document.getElementById('calories-remaining');

        const remaining = this._calorieLimit - this._totalCalories;

        caloriesRemainingEl.innerHTML = remaining;
    }

    _displayCalorieProgress() {
        const progressEL = document.getElementById('calorie-progress');

        const pecentage = (this._totalCalories / this._calorieLimit) * 100;

        const width = Math.min(percentage, 100);
        progressEL.style.width = `${width}%`;
    }

    _render() {
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed(); 
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCalorieProgress();


    }

}


class Meal {
    constructor (name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}

class Workout {
    constructor (name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}

class App {
    constructor() {
        this._tracker = new CalorieTracker();

        document
        .getElementById('meal-form')
        .addEventListener('submit', this._newItem.bind(this, 'meal'));


        document
        .getElementById('workout-form')
        .addEventListener('submit', this._newItem.bind(this, 'workout'));
    }

    _newItem(type ,e) {
        e.preventDefault();

        const name = document.getElementById(`${type}-name`);
        const calories = document.getElementById(`${type}-calories`);


        // Validate Inputs
        
        if (name.value === '' || calories.value === '') {
            alert('Please in all fields ');
            return;
        }
        if (type === 'meal') {
            
            const meal = new Meal(name.value, +calories.value);
            this._tracker.addMeal(meal);
        } else {
            const Workout = new Workout(name.value, +calories.value);
            this._tracker.addWorkout(Workout);
        }





        name.value = '';
        calories.value = '';


        const collapseItem = document.getElementById(`collapse-${type}`);
        const bsCollapse = new bootstrap.Collpase(collapseItem, ( 
            toggle: true,  
        ));


    }
    
}


const app = new App();




























