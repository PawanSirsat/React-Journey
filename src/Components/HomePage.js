import React from 'react'
import './Home.css' // Import your CSS file

const Home = () => (
  <div className='home'>
    <div className='con1'>
      <header>
        <h1>Welcome to My React Learning Project</h1>
      </header>

      <section>
        <h2>About this Project</h2>
        <p>
          This project is my journey in learning React. I've created components
          and small projects to apply and reinforce the concepts I've learned.
          The navbar provides links to different chapters, and each chapter
          contains various components that showcase specific React concepts.
        </p>
      </section>
    </div>
    <footer>
      <p>© 2023 Pawan Sirsat</p>
    </footer>
  </div>
)

export default Home
