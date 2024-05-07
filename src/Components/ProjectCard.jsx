import TimeTravel from "../assets/Images/TimeTravel.jpg";
import StarWild from "../assets/Images/StarWild.png";
import ComingSoon from "../assets/Images/ComingSoon.jpg";

import "./ProjectCard.css";

const Projects = [
  {
    title: "Chronologie de l'Humanitée",
    description: "An interactive timeline showing the history of humanity",
    image: TimeTravel,
    lien: "https://moonlow31.github.io/Projet-Chrono/",
  },
  {
    title: "Star Wild: l'odyssey de la wild",
    description: "A Spatial trip of the solar system in 3D !",
    image: StarWild,
    lien: "https://star-wild.netlify.app/",
  },
  {
    title: "Next Project",
    description: "",
    image: ComingSoon,
    lien: "",
  },
];

function ProjectCard() {
  return (
    <div className="AllCards">
      {Projects.map((project, index) => (
        <div className="Card" key={[index]}>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <a href={project.lien}>
            <img src={project.image} alt={project.title} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
