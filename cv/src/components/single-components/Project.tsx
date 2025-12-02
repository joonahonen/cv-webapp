// Project component for CV
// Used to define a single project, all projects gathered in ProjectList

import Link from "../Link";

type Props = {
  title: string;
  skills: string;
  description: string;
  link?: string;
  iconSrc?: string;
};

function Project({ title, skills, description, link, iconSrc }: Props) {
  return (
    <>
      <div className="single-project">
        {iconSrc && (
          <img src={iconSrc} alt="Project icon" className="project-icon" />
        )}
        <h2>{title}</h2>
        <h3>Developed skills: {skills}</h3>
        <p>{description}</p>
        <div className="project-link">
          <Link href={link} children="Go to project" />
        </div>
      </div>
    </>
  );
}

export default Project;
