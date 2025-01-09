import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('logout-button')
export class LogoutButton extends LitElement {
  static styles = css`
    button {
      background-color: #dc3545;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #c82333;
    }
  `;

  // Handle logout logic here
  logout() {
    // Clear user authentication information, for example:
   
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userLo');
    localStorage.removeItem('user');
    localStorage.removeItem('loginDate');

    
    // Redirect to the login page (or wherever you want to redirect)
    window.location.href = '/';
  }

  render() {
    return html`
      <button @click="${this.logout}">Logout</button>
    `;
  }
}