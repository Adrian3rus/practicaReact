import React, { useState } from 'react';

const Texto = () => {
  const [resaltado, setResaltado] = useState(false);

  return (
    <div>
      <h2
        onMouseOver={() => setResaltado(true)}
        onMouseOut={() => setResaltado(false)}
        style={{
          color: resaltado ? 'red' : 'blue',
          transition: 'color 0.3s ease',
        }}
      >
        Talento tech
      </h2>
    </div>
  );
};

export default Texto;
