import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
// import data from '../data/projects';

const { PUBLIC_URL } = process.env;

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Mahmoud Fathy's projects."
    fullPage
  >
    <img width="90%" height="90%" src={`${PUBLIC_URL}/images/under_construction-2.JPG`} alt="" />
    {/* <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article> */}
  </Main>
);

export default Projects;
