import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './components/Layout';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import { CarToolStoreProvider } from './contexts/carToolStoreContext';

const Home = () => <h2>Welcome to the Tools App!</h2>;

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="color-tool" element={<ColorToolStoreProvider>
            <ColorTool />
          </ColorToolStoreProvider>} />
          <Route path="car-tool" element={<CarToolStoreProvider>
            <CarTool />
          </CarToolStoreProvider>} />
        </Route>
      </Routes>
    </Router>
  );
}

