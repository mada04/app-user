import { LitElement, html, css,  } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lion-footer')
 export class LionFooter extends LitElement {
                   
  static styles = css`

    footer {
      background-color: #222;
      color: white;
      padding: 20px;
      text-align: center;
      position: relative;
      bottom: 0;
      width: 100%;
    }

    footer a {
      color: #007bff;
      text-decoration: none;
    }

    footer a:hover {
      text-decoration: underline;
    }

    .footer-content {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }

    .footer-section {
      flex: 1;
      min-width: 200px;
      margin: 10px;
    }

    lion-button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
    }

    lion-button:hover {
      background-color: #0056b3;
    }

    lion-input {
      width: 100%;
      margin-bottom: 10px;
    }

  `;
 

  render() {
    return html`
     <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>About Us</h3>
        <p>We are a company committed to providing excellent service.</p>
        <lion-button @click=${() => alert('Learn more clicked!')}>Learn More</lion-button>
      </div>

      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Newsletter</h3>
        <lion-input label="Email" type="email" placeholder="Enter your email" required></lion-input>
        <lion-button @click=${() => alert('Subscribed!')}>Subscribe</lion-button>
      </div>
    </div>

    <p>&copy; 2024 Company Name. All rights reserved.</p>
  </footer>
    `;
  }
}
