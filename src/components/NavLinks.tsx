import { NavLink } from 'react-router-dom';

export default function NavLinks() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/new-project">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/single-service">Single Service</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contract">Contract</NavLink>
        </li>
        <li>
          <NavLink to="/financial">Financial</NavLink>
        </li>
      </ul>
    </nav>
  );
}
