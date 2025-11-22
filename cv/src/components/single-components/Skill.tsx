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
        <h3>{title}: {level}</h3>
      </div>
    </>
  );
}

export default Skill;
