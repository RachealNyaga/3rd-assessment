import React, { useState } from 'react';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div>
      {showHeader && (
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: 'blue', padding:'50px', fontSize:'larger' }}>
          This is the header component
        </h1>
      )}
      <button onClick={() => setShowHeader(!showHeader)}>
        {showHeader ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default Header;

