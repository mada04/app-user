import { LitElement, html, css} from 'lit';
import { nothing } from 'lit';
import { customElement , property } from 'lit/decorators.js';

@customElement('lion-forgot')
export class ForgotForm extends LitElement {
  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 300px;
      margin: 0 auto;
    }

    input[type="text"], input[type="password"] {
      padding: 10px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      background-color: orange;
      color: white;
      border: none;
      padding: 10px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: red;
    }

    .error {
      color: red;
      font-size: 0.875rem;
    }
      .container {
      width: 80%;             /* Set width to 80% of the screen */
      max-width: 400px;      /* Limit the maximum width */
      margin: 20px auto;      /* Center the container and add vertical margin */
      padding: 20px;          /* Add padding inside the container */
      border: 2px solid #33333324; /* Border color and thickness */
      border-radius: 10px;    /* Rounded corners */
      background-color: white; /* Light background color */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
         .container h2 {
      text-align: center;
      color: #333;
      margin-bottom: 20px;
    }
       .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
      color: #555;
    }

    .form-group input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-sizing: border-box;
      font-size: 16px;
    }
       .login-button {
      width: 100%;
      padding: 10px;
      background-color: orange;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

    .login-button:hover {
      background-color: red;
    }

    .forgot-password {
      text-align: right;
      margin-top: 10px;
    }

    .forgot-password a {
      text-decoration: none;
      color: #007bff;
    }

    .forgot-password a:hover {
      text-decoration: underline;
    }
  `;

  @property({ type: String }) username = '';
  @property({ type: String }) password = '';
  @property({ type: String }) passwordNew = '';
  @property({ type: Boolean }) isLoading = false;
  @property({ type: String }) errorMessage = '';

  
  goSingIn() {
    // Clear user authentication information, for example:


    // Redirect to the login page (or wherever you want to redirect)
    window.location.href = '/';
   
  }
  
  render() {
    return html`
    <div class="container">

    <h2>Forgot Password</h2>
      <form >
<div class="form-group">
        <label for="username">Email Address</label>
        <input type="text" id="username" .value="${this.username}" @input="${(e: Event) => this.username = (e.target as HTMLInputElement).value}" placeholder="Enter your email" required />
</div>


        
        ${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : nothing}

        <button type="submit" ?disabled="${this.isLoading}" class="login-button">
          ${this.isLoading ? 'Logging in...' : 'Reset Password'}
        </button>
        <p>Already have an account<a href="/"> Sing In</a></p>
        <p>Don't have an account yet?<a href="/register"> Create Account</a></p>
          
    
      </form>
      </div>
    `;
  }
}
