import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';

// function Navbar() {
//   return (
//     <>
//       <Link to={'/'}>Form</Link>
//       <Link to={'/success'}>Success</Link>
//       <Outlet />
//     </>
//   );
// }

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} key="success" />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}
