import { createRoot } from 'react-dom/client';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

const root = createRoot(document.querySelector('#root'));
root.render(<>
  {/* React.createElement(ColorTool, { colors: colorList })  */}
  <ColorTool colors={colorList} />
  <CarTool />
</>);