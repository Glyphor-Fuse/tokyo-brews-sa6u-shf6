import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <Router>
      <div className="antialiased selection:bg-stone-200 selection:text-stone-900">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <GlyphorBadge />
      </div>
    </Router>
  );
}

export default App;