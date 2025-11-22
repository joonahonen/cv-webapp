// Experience component: contains a single work experience, all experience gathered in ExperienceList
type Props = {
  workPlace: string;
  position: string;
  date: string;
  description: string;
};

function Experience({ workPlace, position, date, description }: Props) {
  return (
    <>
      <div className="single-experience">
        <p>{date}</p>
        <h2>{position}</h2>
        <h4>{workPlace}</h4>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Experience;
