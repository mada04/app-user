import { LitElement, html, css } from 'lit';
import { nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lion-register')
export class RegisterForm extends LitElement {
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

  @property({ type: String }) firstName = '';
  @property({ type: String }) lastName = '';
  @property({ type: Date }) birthDay = '';
  @property({ type: String }) email = '';
  @property({ type: String }) password = '';
  @property({ type: String }) phone = '';
  @property({ type: String }) ocupation = '';
  @property({ type: String }) city = '';
  @property({ type: String }) country = '';

  @property({ type: String }) gender = '';
  @property({ type: Boolean }) isLoading = false;
  @property({ type: Boolean }) isError = false;

  @property({ type: String }) message = '';

  // handleInput(e: any) {
  //   const { username, value } = e.target;
  //   username:any = value; // Update the corresponding property
  // }


  handleRegister(event: any) {
    event.preventDefault();
    this.message = ''; // Clear previous message
    this.isError = false;

    if (!this.email || !this.password) {
      this.message = 'Email and password are required.';
      this.isError = true;
      return;
    }

    // Retrieve existing users from localStorage

    let storedUsersString: any = (localStorage.getItem('users')) || '[]';
    const users = JSON.parse(storedUsersString);
    if (Array.isArray(users)) {
      // Check if the email is already registered

      if (users.some((user: any) => user.email === this.email)) {
        this.message = 'Email is already registered.';
        this.isError = true;
        return;
      }

      // Add the new user to the users array
      const newUser = {
        id: Date.now(), // Unique ID for the user
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        country: this.country,
        phone: this.phone,
        city: this.city,
        gender: this.gender,
        ocupation: this.ocupation,
        lastName: this.lastName,
        birthDay: this.birthDay
      };
      const modifiableUsers = [...users]
      modifiableUsers.push(newUser);
      console.log("new", modifiableUsers)

      // Save the updated users array to localStorage
      localStorage.setItem('users', JSON.stringify(modifiableUsers));

      this.message = 'Registration successful!';
      this.isError = false;

      // Clear input fields
      this.firstName = ''
      this.email = '';
      this.password = '';
      this.phone = '';
      this.country = '';
      this.city = '';
      this.gender = '';
     this.ocupation='',
     this.lastName='',
       this.birthDay=''
    }
    else {
      console.log("error")
    }
  }
  goSingIn() {
    // Clear user authentication information, for example:


    // Redirect to the login page (or wherever you want to redirect)
    window.location.href = '/';

  }
  goForgotPage() {
    // Clear user authentication information, for example:


    // Redirect to the login page (or wherever you want to redirect)
    window.location.href = '/forgot';

  }

  render() {
    return html`
    <div class="container">

    <h2>Create Account</h2>
      <form @submit="${this.handleRegister}">
<div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" .value="${this.firstName}" @input="${(e: Event) => this.firstName = (e.target as HTMLInputElement).value}" placeholder="Enter your first name" required />
</div>
<div class="form-group">
<label for="password">Email</label>
        <input type="email" id="email" .value="${this.email}" @input="${(e: Event) => this.email = (e.target as HTMLInputElement).value}" placeholder="Enter your email" required />

</div>
<div class="form-group">
<label for="password">Password</label>
        <input type="password" id="password" .value="${this.password}" @input="${(e: Event) => this.password = (e.target as HTMLInputElement).value}" placeholder="Enter your password" required />

</div>
<div class="form-group">
<label for="phone">Phone</label>
        <input type="tel" id="phone" .value="${this.phone}" @input="${(e: Event) => this.phone = (e.target as HTMLInputElement).value}" placeholder="Enter your phone" required />

</div>
<div class="form-group">
<label for="country">Country</label>
        <input type="text" id="country" .value="${this.country}" @input="${(e: Event) => this.country = (e.target as HTMLInputElement).value}" placeholder="Enter your country" required />

</div>
<div class="form-group">
<label for="city">City</label>
        <input type="city" id="city" .value="${this.city}" @input="${(e: Event) => this.city = (e.target as HTMLInputElement).value}" placeholder="Enter your city" required />

</div>
<div class="form-group">
<label for="gender">Gender</label>
        <input type="text" id="gender" .value="${this.gender}" @input="${(e: Event) => this.gender = (e.target as HTMLInputElement).value}" placeholder="Enter your gender" required />

</div>
<div class="form-group">
<label for="ocupation">Ocupation</label>
        <input type="text" id="ocupation" .value="${this.ocupation}" @input="${(e: Event) => this.ocupation = (e.target as HTMLInputElement).value}" placeholder="Enter your ocupation" required />

</div>
<div class="form-group">
<label for="lastName">Last Name</label>
        <input type="text" id="lastName" .value="${this.lastName}" @input="${(e: Event) => this.lastName = (e.target as HTMLInputElement).value}" placeholder="Enter your last Name" required />

</div>
<div class="form-group">
<label for="birthDay">Birth day</label>
        <input type="text" id="birthDay" .value="${this.birthDay}" @input="${(e: Event) => this.birthDay = (e.target as HTMLInputElement).value}" placeholder="Enter your last Name" required />

</div>
        
        ${this.message ? html`<div class="error">${this.message}</div>` : nothing}

        <button type="submit" ?disabled="${this.isLoading}" class="login-button">
          ${this.isLoading ? 'Logging in...' : 'Create Account'}
        </button>
        <p>Already have an account<a href="/"> Sing In</a></p>
           <div class="forgot-password">
        <a href="/forgot">Forgot your password?</a>
      </div>
      </form>
      </div>
    `;
  }
}
