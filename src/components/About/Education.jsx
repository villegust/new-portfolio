const Education = () => {
  return (
    <div className="about-container__education">
      <div className="about-container__education__title">
        <h1>Education</h1>
      </div>

      <div className="about-container__education__program">
        <div className="about-container__education__program__box">
          <h1>NTI Gymnasiet Uppsala</h1>
          <p>
            High School Software Engineer • <span>Aug 2022 - Jun 2023</span>
          </p>
          <a href="https://www.ntigymnasiet.se/program/mjukvarudesign/uppsala/">
            Link to program
          </a>
        </div>

        <div className="about-container__education__program__box">
          <h1>NTI Gymnasiet Uppsala</h1>
          <p>
            High School Infromation Technology Program •{" "}
            <span>Aug 2019 - Jun 2022</span>
          </p>
          <a href="https://ntigymnasiet.se/uppsala/program/teknikprogrammet/informations-och-medieteknik/">
            Link to program
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
