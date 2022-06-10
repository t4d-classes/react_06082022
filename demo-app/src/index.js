import { createRoot } from 'react-dom/client';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import { CarToolStoreProvider } from './contexts/carToolStoreContext';

const root = createRoot(document.querySelector('#root'));
root.render(<>
  {/* React.createElement(ColorTool, { colors: colorList, headerText: "Bob" })  */}
  <ColorToolStoreProvider>
    <ColorTool headerText="Color Tool" />
  </ColorToolStoreProvider>
  <CarToolStoreProvider>
    <CarTool />
  </CarToolStoreProvider>
</>);