import styles from "./About.module.css"

import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>Developer
      </h2>
      <p>
       Este projeto está sendo desendo desenvolvido como legado
       para estudo de técnicas de DevOps da turma de pós - graduação da
       Unimar.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
