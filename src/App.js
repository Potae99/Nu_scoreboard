import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchStudent from './page/SearchStudent';
import StudentDetail from './page/StudentDetail';
import Login from './component/Login';
import Upload from './page/Upload';

const routes = [
  {
    path: '/',
    element: <SearchStudent />,
  },
  {
    path: 'StudentDetail/:StudentID/*',
    element: <StudentDetail />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '/Upload3692581470',
    element: <Upload />,
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;