const Education = ({ data }) => {
  return (
    <div className="about-container__education">
      <div className="about-container__education__title">
        <h1>Education</h1>
      </div>

      <div className="about-container__education__program">
        {data.map((education, index) => (
          <div key={index} className="about-container__education__program__box">
            <h1>{education.name}</h1>
            <p>
              {education.specification} •{" "}
              <span>
                {education.startMonth} {education.startYear} -{" "}
                {education.endMonth} {education.endYear}
              </span>
            </p>
            <a href={education.link}>Link to program</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
