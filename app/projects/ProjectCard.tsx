import React from 'react'
type Props = {
    project: any
}
export default function ProjectCard(props: Props) {
  return (
    <div>{props.project.name}</div>
  )
}
