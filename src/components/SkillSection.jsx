const SkillSection = ({ data }) => {
  return (
    <section className="skills" id="skills">
      <div className="skills__box">
        <div className="skills__box__title">
          <h1>My skills</h1>
          <p>Making apps with modern technologies</p>
        </div>
        <div className="skills__box__skills">
          {data.map((skill, index) => {
            return (
              <div key={index} className="skills__box__skills__1">
                <img src={skill.url} alt={skill.name} className="skill-image" />
                <div className="skill-tooltip">{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
