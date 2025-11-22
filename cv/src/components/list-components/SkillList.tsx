import Skill from "../single-components/Skill";

// SkillList component used for gathering individual Skills
function SkillList() {
  return (
    <>
      <div>
        <Skill title="Team-work" level="Master" />
        <Skill title="Java-development" level="Expert" />
        <Skill title="Web-development" level="Advanced" />
        <Skill title="React" level="Advanced" />
        <Skill title="Node.js" level="Advanced" />
        <Skill title="Figma" level="Advanced" />
        <Skill title="Cybersecurity" level="Intermediate" />
      </div>
    </>
  );
}

export default SkillList;
