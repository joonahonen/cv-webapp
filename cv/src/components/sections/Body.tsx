import ProjectList from "../list-components/ProjectList";
import SkillList from "../list-components/SkillList";

// Body component: Body of the website
function Body() {
  return (
    <>
      <div className="description">
        <h2>Hi!</h2>
        <p>
          I am Joona Ahonen from Oulu, Finland!
          <br />I love coding, cybersecurity and UI design. I am an outgoing and
          joyful person, that loves learning new things. On this CV website, you
          can find information about my skills, experience and projects!
        </p>
      </div>

      <div className="experience">
        <h1>Work Experience</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          obcaecati et sunt temporibus quae quas ratione quo quibusdam, eveniet
          ea quam eos facilis consequatur distinctio vero dolorem! Aperiam,
          commodi distinctio!
        </p>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <SkillList />
      </div>

      <div className="projects">
        <h1>Projects</h1>
        <ProjectList />
      </div>
    </>
  );
}

export default Body;
