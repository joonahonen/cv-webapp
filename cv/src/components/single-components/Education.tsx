type Props = {
  school: string;
  degree: string;
  description: string;
  date: string;
};

function Education({ school, degree, description, date }: Props) {
  return (
    <>
      <div className="single-education">
        <p>{date}</p>
        <h2>{degree}</h2>
        <h3>{school}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Education;
