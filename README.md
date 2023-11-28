# Polaris React Toast
Toast messaging using `@shopify/polaris` UI with build for shopify guidelines.

## Installation

To use the `polaris-react-toast` package, you need to install it in your React project.

### npm
```bash
npm install polaris-react-toast
```

### yarn
```bash
yarn add polaris-react-toast
```

## Usage
### 1. Import `ToastProvider`
Wrap your main `App` component with the `ToastProvider` to make toast functionality available throughout your app.

```bash
// App.jsx
import React from 'react';
import { ToastProvider } from 'polaris-react-toast';
import MyComponent from './MyComponent';

function App({children}) {
  return (
    <ToastProvider>
      <MyComponent />
    </ToastProvider>
  );
}

export default App;

```

### 2. Import and Use `useToast` Hook
```bash
// MyComponent.jsx
import React from 'react';
import { Button } from '@shopify/polaris';
import { useToast } from 'polaris-react-toast';

const MyComponent = () => {
  const { addToast } = useToast();

  const showToast = () => {
    addToast('Hello, this is a toast message!');
  };

  return (
    <div>
      <Button onClick={showToast}>Show Toast</Button>
    </div>
  );
};

export default MyComponent;
```

### License

This package is licensed under the MIT License - see the `LICENSE` file for details.

### Acknowledgments

This package is inspired by the Shopify Polaris Toast component.