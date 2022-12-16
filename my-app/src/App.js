import './App.css';
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";
import PaginaNoticias from './pages/PaginaNoticias';
import Error from './components/Error/Error';


function App() {
  const router = createBrowserRouter([
    {
      path: "/noticias",
      element: <PaginaNoticias/>,
    },
    {
      path: "/",
      errorElement: <Error/>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
  
}

export default App;
