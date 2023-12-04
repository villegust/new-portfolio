const SkillSection = ({ data }) => {
  return (
    <section className="skills" id="skills">
      <div className="skills__box">
        <div className="skills__box__text">
          <h1>My skills</h1>
          <p>Making apps with modern technologies</p>
        </div>
        <div className="skills__box__skills">
          {data.map((skill, index) => {
            return (
              <div key={index} className="skills__box__skills__1">
                <img src={skill.url} alt="my skills" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
