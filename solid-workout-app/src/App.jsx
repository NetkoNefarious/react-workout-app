import { createSignal } from "solid-js"
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

export default function App() {
  const [workout, setWorkout] = createSignal(null)
  const [poison, setPoison] = createSignal('individual');
  const [muscles, setMuscles] = createSignal([]);
  const [goal, setGoal] = createSignal('strength_power');

  function updateWorkout() {
    if (muscles().length > 0) {
      const poisonVal = poison()
      const musclesVal = muscles()
      const goalVal = goal()

      const newWorkout = generateWorkout({ poisonVal, musclesVal, goalVal });
      setWorkout(newWorkout);

      window.location.href = '#workout'
    }
  }

  return <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
    <Hero />
    <Generator
      poison={poison()} setPoison={setPoison}
      muscles={muscles()} setMuscles={setMuscles}
      goals={goal()} setGoals={setGoal}
      updateWorkout={updateWorkout} />
    {!!workout() && <Workout workout={workout()} />}
  </main>
}