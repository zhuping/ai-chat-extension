import { createRoot } from 'react-dom/client';
import Settings from '../components/Settings';

const root = createRoot(document.getElementById('root') as HTMLElement);

const App = () => {
  return (
    <div>
      <Settings />
    </div>
  );
}

root.render(<App />)