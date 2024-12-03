import React, { useEffect, useState } from 'react';
import API from './utils/api';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    API.get('/')
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>{message || "Loading.."}</h1>
    </div>
  );
};

export default App;