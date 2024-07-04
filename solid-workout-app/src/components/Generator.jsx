/* eslint-disable react/prop-types */
import { createSignal } from "solid-js";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

function Header({ index, title, description }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  )
}

export default function Generator(props) {
  const [showModal, setShowModal] = createSignal(false);

  function toggleModal() {
    setShowModal(!showModal())
  }

  function updateMuscles(muscleGroup) {
    if (props.muscles.includes(muscleGroup)) {
      props.setMuscles(props.muscles.filter(val => val !== muscleGroup))
      return
    }

    if (props.muscles.length > 2)
      return

    if (props.poison !== 'individual') {
      props.setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    props.setMuscles([...props.muscles, muscleGroup])

    if (props.muscles.length === 2) {
      setShowModal(false)
    }
  }

  return (
    <SectionWrapper id="generate" header="generate your workout" title={["It's", "Huge", "o'clock"]}>
      <Header index="01" title="Pick your poison" description="Select the workout you wish to endure" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => (
          <button className={"px-4 bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 " + (type === props.poison ? 'border-blue-600' : 'border-blue-400')} key={typeIndex} onClick={() => { props.setMuscles([]); props.setPoison(type); }}>
            <p className="capitalize">{type.replaceAll('_', ' ')}</p>
          </button>
        ))}
      </div>
      <Header index="02" title="Lock on targets" description="Select the muscles judged for annihilation." />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button className="relative flex items-center justify-center p-3" onClick={toggleModal}>
          <p className="capitalize">{props.muscles.length === 0 ? 'Select muscle groups' : props.muscles.join(' ')}</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal() && (
          <div className="flex flex-col px-3 pb-3">
            {(props.poison === 'individual' ? WORKOUTS[props.poison] : Object.keys(WORKOUTS[props.poison])).map((muscleGroup, muscleGroupIndex) => (
              <button key={muscleGroupIndex} className={"hover:text-blue-400 duration-200 " + (props.muscles.includes(muscleGroup) ? 'text-blue-400' : '')} onClick={() => updateMuscles(muscleGroup)}><p className="capitalize">{muscleGroup.replaceAll('_', ' ')}</p></button>
            ))}
          </div>
        )}
      </div>
      <Header index="03" title="Become Juggernaut" description="Select your ultimate objective." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
          <button className={"bg-slate-950 border py-3 px-4 rounded-lg duration-200 hover:border-blue-600 " + (scheme === props.goals ? 'border-blue-600' : 'border-blue-400')} key={schemeIndex} onClick={() => { props.setGoals(scheme) }}>
            <p className="capitalize">{scheme.replaceAll('_', ' ')}</p>
          </button>
        ))}
      </div>
      <Button func={props.updateWorkout}>Formulate</Button>
    </SectionWrapper>
  )
}
