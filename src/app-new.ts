import { Router } from '@vaadin/router';
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@lion/ui/define/lion-button.js';
import './header.js';
import './login.js';
import'./detailUser.js';
import './forgotPass.js';



// const outlet = document.querySelector('outlet');

//  const router = new Router(outlet);
//  if(outlet){

//    router.setRoutes([
  
//      { path: '/', component: 'login-form' },
//      { path: '/detail', component: 'lion-detail' },
//      { path: '/logOut', component: 'logout-button' },
  
     
//    ]);
//  }
@customElement('app-new')
export class AppNew extends LitElement {
  
  connectedCallback() {
    super.connectedCallback();
    const outlet = this.shadowRoot?.querySelector('#outlet');
    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'login-form' },
      { path: '/detail', component: 'lion-detail' },
      { path: '/register', component: 'lion-register' },
      { path: '/forgot', component: 'lion-forgot' },
    ]);
  }
  // navigate() {
  //   // const message = encodeURIComponent('Hello from Page One!');
  //   window.location.href = `/login`;
  //   console.log("sunt")
  // }
  render() {
    return html`
<body>

    <div id="outlet">
    <lion-header></lion-header>

  </div>

</body>
  
    `;
  }


}
