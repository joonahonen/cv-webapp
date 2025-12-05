import Project from "../single-components/Project";
import book from "../../assets/open-book.png";
import resume from "../../assets/resume.png";
import weather from "../../assets/cloudy-day.png";
import phone from "../../assets/smartphone.png";

// ProjectList component used for gathering individual projects
function ProjectList() {
  return (
    <>
      <div>
        <Project
          title="Ystäväkirja (Friendbook)"
          skills="HTML, CSS, JS, Node.js"
          description="Website created to help orientate first year students. 
          Consists of frontend, backend and database. 
          Collects user given information and displays it on the website. 
          Website could be published in the future! 
          Currently not published."
          link="https://github.com/joonahonen/Ystavakirja_2025"
          iconSrc={book}
        />
        <Project
          title="CV-webapp"
          skills="React, TypeScript, Components"
          description="This Curriculum Vitae-webapp! Created to show realworld proficiency in React, web development and TypeScript. 
          Also ment to highlight skills and experience, like a regular CV."
          link="https://github.com/joonahonen/cv-webapp"
          iconSrc={resume}
        />
        <Project
          title="Weatherapp"
          skills="Java, Teamwork, API"
          description="Course-project made using Java. 
          Weatherapp is a desktop application that gets real-time weather information using and API-service! 
          The app was made my myself and another student. It is outdated, but shows real world knowledge of Java programming skills."
          link="https://github.com/joonahonen/o4_saasovellus"
          iconSrc={weather}
        />
        <Project
          title="Sudoku drinking game"
          skills="React, PWA, Mobile-development"
          description="An unfinished PWA mobile application. 
          A fun drinking oriented Sudoku-game, that can be played by multiple people at the same time. 
          Currently still being created. Information will be updated, when the project is finished!"
          iconSrc={phone}
        />
      </div>
    </>
  );
}

export default ProjectList;
