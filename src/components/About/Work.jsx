const Work = ({ data }) => {
  return (
    <div className="about-container__work">
      <div className="about-container__work__title">
        <h1>Work</h1>
      </div>

      <div className="about-container__work__container">
        {data.map((work, index) => (
          <div key={index} className="about-container__work__container__box">
            <h1>{work.name}</h1>
            <p>
              {work.specification} •{" "}
              <span>
                {work.startMonth} {work.startYear} - {work.endMonth}{" "}
                {work.endYear}
              </span>
            </p>
            <h4>{work.about}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
