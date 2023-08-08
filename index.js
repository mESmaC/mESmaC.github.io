import { createRoot } from 'react-dom';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(<html>Hello, React</html>);