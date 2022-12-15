import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";
import PaginaNoticias from './pages/PaginaNoticias';

function App() {
  const router = createBrowserRouter([
    {
      path: "/noticias",
      element: <PaginaNoticias/>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
  
}

export default App;
