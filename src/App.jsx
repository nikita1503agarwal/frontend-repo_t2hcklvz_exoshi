import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#home" className="text-sm text-slate-600 hover:text-slate-900">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
