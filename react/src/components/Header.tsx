export const Header = () => {
  return (
    <nav>
      <h1>View transitions</h1>
      <ul>
        <li>
          <a className="navigation" href="#" data-current="true">
            Home
          </a>
        </li>
        <li>
          <a id="from" className="navigation" href="#">
            From
          </a>
        </li>
        <li>
          <a id="from" className="navigation" href="#">
            To
          </a>
        </li>
      </ul>
    </nav>
  );
};
