import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import AdminView from './pages/AdminView';

// This is the part you'll need to change to fetch data from a database
const users = [
  { name: 'Admin', role: 'Admin' },
  { name: 'Mesero', role: 'Mesero' },
  { name: 'Cajero', role: 'Cajero' },
];

function App() {
  const [loggedInUser, setLoggedInUser] = useState<{ name: string; role: string } | null>(null);

  const handleLogin = (username: string) => {
    const user = users.find(u => u.name.toLowerCase() === username.toLowerCase());
    if (user) {
      setLoggedInUser(user);
    } else {
      alert('Usuario no encontrado');
    }
  };

  if (loggedInUser) {
    return <AdminView username={loggedInUser.name} role={loggedInUser.role} />;
  }

  return <LoginPage onLogin={handleLogin} />;
}

export default App;