import navbar from 'src/components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <navbar />

      <main id="center">
        <section className="hero">
          <h1>Welcome to My Website</h1>

          <p>
            This is a React application built with Vite.
          </p>

          <button className="counter">
            Get Started
          </button>
        </section>
      </main>

      <section id="next-steps">
        <div id="docs">
          <h2>About</h2>
          <p>
            Learn more about this application and its features.
          </p>
        </div>

        <div>
          <h2>Contact</h2>
          <p>
            Get in touch with us for more information.
          </p>
        </div>
      </section>

      <div id="spacer" />
    </>
  )
}

export default App
