import React from "react";

import { FaGithub } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";

const ProjectSection = ({ data }) => {
  return (
    <section className="project-section" id="projects">
      <div className="project-container">
        <div className="project-container__title">
          <h1>My projects </h1>
        </div>

        <div className="project-container__content">
          {data.map((project, index) => {
            return (
              <div key={index} className="project-container__content__box">
                <img src={project.image} alt="project" />
                <div className="project-container__content__box__text">
                  <h1>{project.name}</h1>
                  <p>{project.desc}</p>
                </div>

                <div className="project-container__content__box__links">
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      className="project-container__content__box__links__btn"
                    >
                      <span>
                        <FaGithub />
                        <p>Github Repo</p>
                      </span>
                    </a>
                  ) : (
                    ""
                  )}
                  {project.websiteLink ? (
                    <a
                      href={project.websiteLink}
                      className="project-container__content__box__links__btn"
                    >
                      <span>
                        <TbExternalLink />
                        <p>Live Website</p>
                      </span>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
