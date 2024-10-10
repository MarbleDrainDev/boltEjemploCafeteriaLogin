import React from 'react';

interface AdminViewProps {
  username: string;
  role: string;
}

const AdminView: React.FC<AdminViewProps> = ({ username, role }) => {
  const getBgColor = () => {
    switch (role) {
      case 'Admin':
        return 'bg-blue-500';
      case 'Mesero':
        return 'bg-orange-500';
      case 'Cajero':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${getBgColor()}`}>
      <h1 className="text-4xl font-bold text-white">Hola {username}</h1>
    </div>
  );
};

export default AdminView;