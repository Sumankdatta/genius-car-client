import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/router';

function App() {
  return (
    <div className='mx-auto' style={{ width: '1140px' }}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
