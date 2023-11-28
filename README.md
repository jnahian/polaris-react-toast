# Polaris React Toast
Toast messaging using `@shopify/polaris` UI with build for shopify guidelines.

## Installation

To use the `polaris-react-toaster` package, you need to install it in your React project.

### npm
```bash
npm install polaris-react-toaster
```

### yarn
```bash
yarn add polaris-react-toaster
```

## Usage
### 1. Import `ToastProvider`
Wrap your main `App` component with the `ToastProvider` to make toast functionality available throughout your app.

```bash
// App.jsx
import React from 'react';
import { ToastProvider } from 'polaris-react-toaster';
import MyComponent from './MyComponent';

function App() {
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
import { useToast } from 'polaris-react-toaster';

const MyComponent = () => {
  const { addToast } = useToast();

  const showToast = () => {
    addToast({
      content: "Hello! This is a toast message.",
      action: {
        content: "undo",
        onAction() {
          console.log("undo clicked");
        },
      },
      duration: 10000,
    });
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