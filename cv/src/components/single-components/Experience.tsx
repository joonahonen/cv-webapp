import Link from "../Link";

// Experience component: contains a single experience, all experience gathered in different lists: ExperienceList, OtherExperienceList
type Props = {
  workPlace: string;
  position: string;
  date: string;
  description: string;
  link?: string;
};

function Experience({ workPlace, position, date, description, link }: Props) {
  return (
    <>
      <div className="single-experience">
        <p className="exp-date">{date}</p>
        <h2 className="exp-pos">{position}</h2>
        <h4 className="exp-place">{workPlace}</h4>
        <p className="exp-desc">{description}</p>
        <div className="exp-link">
          <Link href={link} children="Link" />
        </div>
      </div>
    </>
  );
}

export default Experience;
