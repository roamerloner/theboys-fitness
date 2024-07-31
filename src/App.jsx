import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'



function App() {


  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
     let newWorkout = generateWorkout({poison, muscles, goal});
     setWorkout(newWorkout);

     window.location.href = '#workout'
    }
const [workout, setWorkout] = useState(null);
const [poison, setPoison] = useState('individual');
const [muscles, setMuscles] = useState([]);
const [goal, setGoal] = useState('strength_power');

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm sm:text-base'>
      <Hero />
      <Generator 
       poison={poison}
       setPoison={setPoison}
       muscles={muscles}
       setMuscles={setMuscles}
       goal={goal}
       setGoal={setGoal}
       updateWorkout={updateWorkout}/>
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
