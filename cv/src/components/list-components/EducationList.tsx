import Education from "../single-components/Education";

function EducationList() {
  return (
    <>
    <Education
        date="2026 - Present"
        degree="Master of Science: Computer Science"
        school="University of Oulu"
        description="MSc in Computer Science, graduating in 2028."
      />
      <Education
        date="2023 - 2026"
        degree="Bachelor of Science: Computer Science"
        school="University of Oulu"
        description="BsC in Computer Science, graduated in June 2026."
      />
    </>
  );
}

export default EducationList;
