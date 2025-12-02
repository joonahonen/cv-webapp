// Skill component for CV
// Used to define a single skill, all projects gathered in SkillList

type Props = {
  title: string;
  level: string;
};

function Skill({ title, level }: Props) {
  return (
    <>
      <div className="single-skill">
        <p className="skill-desc"><b>{title}: {level}</b></p>
      </div>
    </>
  );
}

export default Skill;
