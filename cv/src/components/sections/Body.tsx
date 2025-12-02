import EducationList from "../list-components/EducationList";
import ExperienceList from "../list-components/ExperienceList";
import OtherExperienceList from "../list-components/OtherExperienceList";
import ProjectList from "../list-components/ProjectList";
import SkillList from "../list-components/SkillList";
import "./Body.css";

// Body component: Body of the website
function Body() {
  return (
    <div className="body-container">
      <div className="description">
        <div className="description-box">
          <p>
            <h2>Hi!</h2>
            <b>I am Joona Ahonen from Oulu, Finland!</b>
            <br />I love coding, cybersecurity and UI design. I am an outgoing
            and joyful person, that loves learning new things. On this CV
            website, you can find information about my skills, experience and
            projects! I am always up for new challenges and am looking forward
            to using my skills in realworld projects.
          </p>
        </div>
      </div>

      <h1>Education</h1>
      <div className="education">
        <div className="education-list">
          <EducationList />
        </div>
      </div>

      <div className="main-columns">
        <div className="left-col">
          <h1>Work Experience</h1>
          <div className="experience">
            <div className="experience-list">
              <ExperienceList />
            </div>
          </div>

          <h1>Other experience</h1>
          <div className="experience">
            <div className="experience-list">
              <OtherExperienceList />
            </div>
          </div>
        </div>

        <div className="right-col">
          <h1>Skills</h1>
          <div className="skills box">
            <div className="skills-list">
              <SkillList />
            </div>
          </div>

          <h1>Projects</h1>
          <div className="projects-list">
            <ProjectList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
