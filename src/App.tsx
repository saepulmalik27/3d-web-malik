import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About, Contact, Home, Project } from 'pages/index';

import Navbar from 'components/Navbar';

function App() {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
