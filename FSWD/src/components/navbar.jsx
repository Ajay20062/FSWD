function navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          My Website
        </a>

        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
