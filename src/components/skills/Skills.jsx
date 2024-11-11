import { PiHeadCircuit } from "react-icons/pi";
import { MdMenuBook } from "react-icons/md";

import "./skills.css";
import { TypeScript, Blender, Nestjs, Nextjs, Redux, Tailwind, ReactIcon, ThreeJs } from "../index.js";

export function Skills() {
  const skills = [
    { icon: <TypeScript />, name: "TypeScript" },
    { icon: <Nextjs />, name: "Nextjs" },
    { icon: <Redux />, name: "Redux" },
    { icon: <Tailwind />, name: "Tailwind CSS" },
    { icon: <ReactIcon />, name: "React" },
    { icon: <Nestjs />, name: "Nestjs" }
  
  ];

  const learning = [
    { icon: <Blender />, name: "Blender 3D" },
    { icon: <ThreeJs />, name: "Three.js" },
  ];

  return (
    <section id="skills" className="skills">
      <h2><PiHeadCircuit size={40} /> Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li className="techno" key={skill.name}>
            {skill.icon}
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>

      <h2><MdMenuBook size={40} /> Learning</h2>
      <ul className="skills__list">
        {learning.map((skill) => (
          <li className="techno" key={skill.name}>
            {skill.icon}
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
