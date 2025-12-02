import Education from "../single-components/Education";

function EducationList() {
  return (
    <>
      <Education
        date="2023 - 2026"
        degree="Bachelor of Science: Computer Science"
        school="University of Oulu"
        description="BsC in Computer Science, graduating in June 2026."
      />
      <Education
        date="2020 - 2023"
        degree="Matriculation Examination"
        school="Haukipudas Upper Secondary School"
        description="Highscool degree at Haukipudas."
      />
    </>
  );
}

export default EducationList;
