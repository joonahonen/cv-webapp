// Skill component for CV
// Used to define a single skill, all projects gathered in SkillList

type Props = {
  title: string;
  level: string;
};

function Skill({ title, level }: Props) {
  return (
    <>
      <p>
        {title}: {level}
      </p>
    </>
  );
}

export default Skill;
