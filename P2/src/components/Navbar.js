import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>ALTO</h2>
      <ul>
        <li>Home</li>
        <li>Galerry</li>
        <li>About</li>
      </ul>
      <div className="searchBox">
        <input type="search" placeholder="Search...." ></input>
        <button >Search</button>
      </div>
    </div>
  );
};

export default Navbar;
