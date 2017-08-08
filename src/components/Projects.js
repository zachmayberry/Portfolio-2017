import React, { Component } from 'react';
import Project from './Project';

import projectsData from '../data/projects';

class Projects extends Component {
  render() {
    const projectList = projectsData.map((project) =>
      <Project key={project.id} id={project.id} name={project.name} type={project.projectType} shapes={project.shapes} images={project.images} url={project.url} />
    );

    return (
      <div>
        <ul id="projects">
          {projectList}
        </ul>
      </div>
    );
  }
}

export default Projects;
