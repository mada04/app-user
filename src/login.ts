import { LitElement, html, css} from 'lit';
import { nothing } from 'lit';
import { customElement , property } from 'lit/decorators.js';


@customElement('login-form')
export class LoginForm extends LitElement {
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

  @property({ type: String }) email = '';
  @property({ type: String }) password = '';
  @property({ type: Boolean }) isLoading = false;
  @property({ type: Boolean }) isLoggedIn = false;
  @property({ type: String }) error = '';

  // Handle form submission
  connectedCallback() {
    super.connectedCallback();
    this.checkLoginStatus();
  }
  checkLoginStatus() {
    let storedUsersString:string= (localStorage.getItem('users')) || '[]';
    const users =JSON.parse(storedUsersString); // Retrieve the user from localStorage
    if (users) {
      this.isLoggedIn = true;

    } else {
      this.isLoggedIn = false;
    }
  }
  handleLogin(event:any) {
    event.preventDefault();
    this.error = ''; // Clear previous error

    // Retrieve stored user data from localStorage
    let storedUsersString:any= (localStorage.getItem('users')) || '[]';
        const users =JSON.parse(storedUsersString);
        console.log("users",users)
        if (Array.isArray(users)) {
        const user = users.find(
          (u:any) => u.email === this.email && u.password === this.password
        );
        
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));

          // Save login date
          const loginDate = new Date().toLocaleString();
          localStorage.setItem('loginDate', loginDate);
           this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', "true");
          alert('Login successful!');
          this.email = '';
          this.password = '';
          window.location.href = '/detail';
        } else {
          alert('Invalid email or password.');
        }}
        else{
          this.error = 'User data is not properly formatted.';
        }
 
  }
  
  render() {
    return html`
    <div class="container">

    <h2>Sing in</h2>
      <form @submit="${this.handleLogin}">
<div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" .value="${this.email}" @input="${(e: Event) => this.email = (e.target as HTMLInputElement).value}" placeholder="Enter your email" required />
</div>
<div class="form-group">
<label for="password">Password</label>
        <input type="password" id="password" .value="${this.password}" @input="${(e: Event) => this.password = (e.target as HTMLInputElement).value}" placeholder="Enter your password" required />

</div>
        
        ${this.error ? html`<div class="error">${this.error}</div>` : nothing}

        <button type="submit" ?disabled="${this.isLoading}" class="login-button">
          ${this.isLoading ? 'Logging in...' : 'Sing in'}
        </button>
        <p>Don't have an account yet? <a href="/register">Create Account</a></p>
           <div class="forgot-password">
        <a href="/forgot">Forgot Password?</a>
      </div>
      </form>
      </div>
    `;
  }
}
