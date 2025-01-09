import { LitElement, html, css,  } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './logout.js';
import './login.js';

const logo = new URL('../../assets/logot.jpg', import.meta.url).href;
@customElement('lion-header')
 export class LionHeader extends LitElement {
                   
  static styles = css`

     header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #f5ad27;
      color: white;
    }
    nav {
      display: flex;
      gap: 1rem;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

  `;
  @property({ type: Boolean }) isLoggedIn = false;
  constructor() {
    super();
    // Check login status from localStorage
    this.isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
  }
  viewDetail() {
    // Clear user authentication information, for example:


    // Redirect to the login page (or wherever you want to redirect)
    window.location.href = '/detail';
   
  }
  viewLogin() {

    window.location.href = '/';
   
  }

  registerUser() {

    window.location.href = '/register';
   
  }

  render() {
    return html`
      <header>
   <div class="logo" >My logo</div>
     <nav>
     ${this.isLoggedIn 
     ?html`     <lion-button @click=${this.viewDetail} style="background-color:#d7315f">Detail</lion-button>
   
      
       <logout-button></logout-button>` 
    
:html`<lion-button @click=${this.registerUser} style="background-color:#d7315f">Register</lion-button><lion-button @click=${this.viewLogin} style="background-color:#d7315f">Login</lion-button>`}
      

 
     
     </nav>
   </header>
    `;
  }
}
