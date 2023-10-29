import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchStudent from './page/SearchStudent';
import StudentDetail from './page/StudentDetail';
import Login from './component/Login';
import FileManagement from './page/FileManagement';

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
    path: 'file/management',
    element: <FileManagement />
  }
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