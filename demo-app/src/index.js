import { createRoot } from 'react-dom/client';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const root = createRoot(document.querySelector('#root'));
root.render(<>
  <ColorTool />
  <CarTool />
</>);