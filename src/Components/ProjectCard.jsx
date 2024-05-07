import TimeTravel from "../assets/Images/TimeTravel.jpg";
import StarWild from "../assets/Images/StarWild.png";

const Projects = [
  {
    title: "Chronologie de l'Humanitée",
    description:
      "Une chronologie interactive retraçant l'histoire de l'humanitée",
    image: TimeTravel,
    lien: "https://moonlow31.github.io/Projet-Chrono/",
  },
  {
    title: "Star Wild: l'odyssey de la wild",
    description: "Une exploration spatiale du système solaire un 3D !",
    image: StarWild,
    lien: "https://star-wild.netlify.app/",
  },
];

function ProjectCard() {
  return (
    <>
      {Projects.map((project, index) => (
        <div className="Card" key={[index]}>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          <a href={project.lien} />
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
