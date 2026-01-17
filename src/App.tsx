import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <div className="antialiased selection:bg-stone-200 selection:text-stone-900">
      <Index />
      <GlyphorBadge />
    </div>
  );
}

export default App;