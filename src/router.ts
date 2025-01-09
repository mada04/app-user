import { Router } from '@vaadin/router';
import './login.js';  // Import page components
import './detailUser.js';
import './registerUser.js';

// Define the routes
const routes = [
  {
    path: '/',
    component: 'login-form',
  },
  {
    path: '/detail',
    component: 'lion-detail',
  },
  {
    path: '/register',
    component: 'lion-register',
  },
  {
    path: '/forgot',
    component: 'lion-forgot',
  },
];

// Ensure the router outlet exists before initializing the router
window.addEventListener('DOMContentLoaded', () => {
  const outlet = document.querySelector('router-outlet');
  if (outlet) {
    const router = new Router(outlet);
    router.setRoutes(routes);
  } else {
    console.error('No outlet found!');
  }
});