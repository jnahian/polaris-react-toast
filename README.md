# Polaris React Toast
[![NPM version][npm-image]][npm-url]
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/jnahian/polaris-react-toaster/publish.yml)
![npm-typescript]
[![License][github-license]][github-license-url]

Toast messaging using `@shopify/polaris` UI with build for shopify guidelines.

## Installation

To use the `polaris-react-toaster` package, you need to install it in your React project.

## Demo
https://github.com/jnahian/polaris-react-toast/assets/11865446/dc898bcd-8d8b-4f35-9752-2f69dd78c44c



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



[npm-url]: https://www.npmjs.com/package/polaris-react-toaster
[npm-image]: https://img.shields.io/npm/v/polaris-react-toaster
[github-license]: https://img.shields.io/github/license/jnahian/polaris-react-toaster
[github-license-url]: https://github.com/jnahian/polaris-react-toaster/blob/master/LICENSE
[github-build]: https://github.com/jnahian/polaris-react-toaster/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/jnahian/polaris-react-toaster/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/polaris-react-toaster