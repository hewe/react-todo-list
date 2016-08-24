import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';

render(
    <App/>, /* the component that you want to render. In this case it is App component with JSX syntax. */
    document.getElementById('app') /* This is the DOM element that you want to mount the component for the render */
);