import {
  Nextjs,
  Redux,
  Tailwind,
  Angular,
  Nestjs,
  ReactIcon,
  TypeScript,
  OpenAi,
} from "../../index";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export function Project(project) {
  const {
    name,
    image,
    description,
    technologies,
    website,
    repoBack,
    repoFront,
  } = project;

  const technos = {
    Angular: <Angular size={30} />,
    Nextjs: <Nextjs size={30} />,
    Redux: <Redux size={30} />,
    Tailwind: <Tailwind size={30} />,
    Nestjs: <Nestjs size={30} />,
    React: <ReactIcon size={30} />,
    TypeScript: <TypeScript size={30} />,
    OpenAi: <OpenAi size={35} />,
  };
  const handleOnClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <li className="project">
      <article className="project__image">
        <img src={image} alt="" />
      </article>
      <div className="info">
        <article>
          <h3>{name}</h3>
          <p>{description}</p>
        </article>
        <ul className="info__list">
          {technologies.map((item) => (
            <li key={item}>{technos[item]}</li>
          ))}
        </ul>
        <nav className="info__nav">
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button onClick={() => handleOnClick(website)}>Live</Button>
            <Button onClick={() => handleOnClick(repoBack)}>Back</Button>
            <Button onClick={() => handleOnClick(repoFront)}>Front</Button>
          </ButtonGroup>
        </nav>
      </div>
    </li>
  );
}
