import React from 'react'; // {{ edit_1 }}
import './Foreground.css';


function Foreground(props: { children: React.ReactNode }) {
  const {children} = props
  return (
    <div className='Foreground'>
      {children}
    </div>
  );
}

export default Foreground;
