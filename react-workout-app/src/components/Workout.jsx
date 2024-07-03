/* eslint-disable react/prop-types */
import ExerciseCard from './ExerciseCard'
import SectionWrapper from './SectionWrapper'

export default function Workout({ workout }) {
    return (
        <SectionWrapper header="Welcome to" title={["The", "DANGER", "zone"]}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => (
                    <ExerciseCard index={i} exercise={exercise} key={i} />
                ))}
            </div>
        </SectionWrapper>
    )
}
