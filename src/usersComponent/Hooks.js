import React, { useState } from 'react';

const Users = () => {
  const [users] = useState([

    { name: "John Doe", id: 1, career: 'Software engineer' },
    { name: "Jane Doe", id: 2, career: 'Data scientist' },
    { name: "Billy Doe", id: 3, career: 'Cyber security analyst' }
  ]);

  return (
    <div className='Users'>
      {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Career: {user.career}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
