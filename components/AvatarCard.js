// Import React library for creating a React component
import React from 'react';

// Import the CSS for styling the component
import './styles/AvatarCard.css';

// Define the AvatarCard functional component
const AvatarCard = ({ 
  src,  // Source URL of the image
  alt,  // Alternative text for the image
  size  // Size of the profile photo (optional)
}) => {
  // If no size is provided, set the default size to 250x250px
  const style = size ? { width: size, height: size } : { width: '250px', height: '250px' };

  // Return JSX to render the profile photo
  return (
    <div className="avatarCardWrapper">
      <img 
        src={src} 
        alt={alt || 'User Avatar'} 
        style={style}
        className="avatarCardPhoto"
      />
    </div>
  );
};

export default AvatarCard;
