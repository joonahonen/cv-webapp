// Project component for CV
// Used to define a single project, all projects gathered in ProjectList

import Link from "../Link";

type Props = {
  title: string;
  skills: string;
  description: string;
  link?: string;
};

function Project({ title, skills, description, link }: Props) {
  return (
    <>
      <div className="single-project">
        <h2>{title}</h2>
        <h3>Developed skills: {skills}</h3>
        <p>{description}</p>
        <div className="project-link"><Link href={link} children="Go to project"/></div>
      </div>
    </>
  );
}

export default Project;
