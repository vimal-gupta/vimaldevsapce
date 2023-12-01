import React from 'react'
import ProjectCard from './ProjectCard';

function getData():any {
    const res =  {
        "0": { "key": 0, "name": "AWS" },
        "1": { "key": 1, "name": "Azure" },
        "2": { "key": 2, "name": "FullStack" },
        "3": { "key": 3, "name": "Data Pipeline" }
     }; 
}

export default function Listings() {
  const data = {
    "projects":[
    { "key": 0, "name": "AWS" },
    { "key": 1, "name": "Azure" },
     { "key": 2, "name": "FullStack" },
    { "key": 3, "name": "Data Pipeline" }
  ]
 };
  return (
    <div>
        {data.projects.map((project:any)=> (
        <ProjectCard project={project}  key={project.key}/>
        ))}
    </div>
  )
}
