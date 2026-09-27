import Project from "../single-components/Project";
import book from "../../assets/open-book.png";
import resume from "../../assets/resume.png";
import weather from "../../assets/cloudy-day.png";
import ai from "../../assets/artificial-intelligence-2.png";

// ProjectList component used for gathering individual projects
function ProjectList() {
  return (
    <>
      <div>
        <Project
          title="Bachelor's project: Intelligent Knowledge Assistant"
          skills="Python, AI, LLMs, Teamwork"
          description="My Bachelor's project, where me and my team built an AI powered Intelligent Knowledge Assistant using open-source LLMs, RAG and vector databases. The AI application also has a web interface, created using React."
          link="https://github.com/JPK-fin/Intelligent-Knowledge-Assistant"
          iconSrc={ai}
        />
        <Project
          title="Bachelor's thesis"
          skills="Cybersecurity, Academic writing, Research"
          description="My Bachelor's thesis (written in Finnish), about social engineering in an organisational environment. My thesis goes over social engineering tactics, risks and management"
          link="https://urn.fi/URN:NBN:fi:oulu-202605113135"
          iconSrc={book}
        />
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
      </div>
    </>
  );
}

export default ProjectList;
