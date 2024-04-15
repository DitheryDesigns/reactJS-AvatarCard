# AvatarCard React Component

## Overview

The `AvatarCard` component provides a simple way to display a rounded user avatar photo with a chocolate-colored border in your React applications.

## Features

- **Image Source**: Customizable image source URL via the `src` prop.
- **Alt Text**: Customizable alternative text via the `alt` prop.
- **Size**: Customizable size via the `size` prop, defaults to 250x250px.
- **Styling**: Additional styling can be easily added by modifying the `AvatarCard.css` file.

## Installation

1. Download both `AvatarCard.js` and its associated `AvatarCard.css` files.
2. Place them into your project's appropriate directory.

## Usage

```jsx
import AvatarCard from './path/to/AvatarCard';

function App() {
  return (
    <AvatarCard src="url/to/image.jpg" alt="User Name" size="100px" />
  );
```

## Props

- `src` (String): Image source URL.
- `alt` (String): Alternative text for the image.
- `size` (String): Size of the image (e.g. "100px"). Defaults to 250x250px.

## License

MIT License

