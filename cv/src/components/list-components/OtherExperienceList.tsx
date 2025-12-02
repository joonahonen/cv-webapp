import Experience from "../single-components/Experience";

function OtherExperienceList() {
  return (
    <>
      <div>
        <Experience
          workPlace="University of Oulu"
          position="Student Tutor"
          date="09/2024 - 12/2024"
          description="Student Tutor for new students enrolled in Information Processing Science. Learned important team-leading skills."
          link="https://openbadgefactory.com/obv3/credentials/352fe3297ca4851fbe984c4abf2e9bd5a86d591e.html?lang=en"
        />
        <Experience
          workPlace="Blanko ry"
          position="Board Member"
          date="2024"
          description="Acted as a board member at the Information Processing Science Guild: Blanko ry. Learned organization management skills."
        />
      </div>
    </>
  );
}

export default OtherExperienceList;
