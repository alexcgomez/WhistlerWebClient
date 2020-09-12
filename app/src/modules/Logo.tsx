import React from 'react';

function Logo(props: { maxWidth: any }) {
  return (
    <div className="logo">
      <img src="logo.svg" alt={'whistler-logo'} style={{ maxWidth: props.maxWidth }} />
    </div>
  );
}

export default Logo;
