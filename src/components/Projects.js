import React, { Component } from 'react';
import Project from './Project';

import projectsData from '../data/projects';

class Projects extends Component {
  render() {
    const projectList = projectsData.map((project) =>
      <Project key={project.name + project.projectType} name={project.name} type={project.projectType} shapes={project.shapes} images={project.images} />
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
