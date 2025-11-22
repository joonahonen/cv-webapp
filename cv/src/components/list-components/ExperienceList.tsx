import Experience from "../single-components/Experience";

// ExperienceList component: gathers all experiences and is used in the body section

function ExperienceList() {
  return (
    <>
      <div>
        <Experience
          workPlace="Martela"
          position="Moving Worker"
          date="05/2025 - 09/2025"
          description="Moving worker for Martela in Oulu. 
          The job consisted of moving, delivering and organizing customer allocated items. Customer service was also important."
        />
        <Experience
          workPlace="Mervin Kukka"
          position="Flower Courier"
          date="02/2022 - 08/2025"
          description="Gig work as a flower courier. I delivered flowers to customers and further developed my customer service skills."
        />
        <Experience
          workPlace="K-Supermarket Revontori"
          position="Summerjob"
          date="06/2021 - 07/2021"
          description="Summerjob at my local K-Supermarket. Job consisted of customer service, packing and unpacking store items."
        />
        <Experience
          workPlace="Haukiputaan Tuoretuote ja Kukka"
          position="Market salesperson"
          date="06/2020 - 07/2020"
          description="Summerjob at my local market. 
          Performed customer service, calculated and packed customer purchases. 
          My first job, where I developed a solid foundation in customer service!"
        />
      </div>
    </>
  );
}

export default ExperienceList;
