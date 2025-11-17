// Project component for CV
// Used to define a single project, all projects gathered in ProjectList

type Props = {
  title: string;
  description: string;
};

function Project({ title, description }: Props) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

export default Project;
