import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import BootStrapLogin from './components/BootStrapLogin/BootStrapLogin';
import ReactBootStrapForm from './components/ReactBootStrapForm/ReactBootStrapForm';
import Main from './layout/Main';

//create a router with createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>,
    children: [
      {
        path: '/', element: <ReactBootStrapForm></ReactBootStrapForm>
      },
      {
        path: '/register now', element: <ReactBootStrapForm></ReactBootStrapForm>
      },
      {
        path: '/login now', element: <BootStrapLogin></BootStrapLogin>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
