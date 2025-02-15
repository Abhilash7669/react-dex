import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <div id='app'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
