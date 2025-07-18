import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../assets/styles/ProjectsSection.module.css";

const projects = [
  {
    title: "Website Shahab Package",
    description: "My first advertising project using beautiful and attractive animations.",
    link: "https://pakageshahab.ir/",
    image: "/images/1.png",
  },
  {
    title: "Tetris Game",
    description: "Nostalgia Tetris game using React hooks and custom hooks",
    link: "https://github.com/lansow/tetris",
    image: "/images/2.png",
  },
  {
    title: "Passgen",
    description: "Password generator for more security.",
    link: "https://github.com/lansow/pass-gen",
    image: "/images/3.png",
  },
  {
    title: "Local Fake API",
    description: "Local Fake API Generator for easier project development",
    link: "https://github.com/lansow/local-fake-api",
    image: "/images/4.png",
  },
  // {
  //   title: "UI Components",
  //   description: "Custom built UI library for a dashboard.",
  //   link: "#",
  //   image: "/images/1.png",
  // },
];


export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.a
      href={project.link}
      className={styles.card}
      target="_blank"
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      <img
        src={project.image}
        alt={project.title}
        className={styles.projectImage}
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </motion.a>
  );
}
