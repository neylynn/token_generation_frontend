import React from 'react';
import { useLocation } from 'react-router-dom';

const TokenPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Token</h2>
      {token && <p>Your generated token: {token}</p>}
      {!token && <p>No token found.</p>}
    </div>
  );
};

export default TokenPage;
