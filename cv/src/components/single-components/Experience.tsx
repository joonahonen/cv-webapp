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
        <p className="exp-date">{date}</p>
        <h2 className="exp-pos">{position}</h2>
        <h4 className="exp-place">{workPlace}</h4>
        <p className="exp-desc">{description}</p>
      </div>
    </>
  );
}

export default Experience;
