import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-button.js';
import FacebookIcon from '@mui/icons-material/Facebook';
interface User {
  userName: string;
  email: string;
  phone: string;
  address: string;
}
@customElement('lion-detail')
export class UserDetails extends LitElement {
  static styles = css`
   .user-details {
      position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 450px;
  display: flex;
  box-shadow: 0 1px 20px 0 rgba(69,90,100,.08);
    }
  .user-details .left{
  width: 35%;
  background: linear-gradient(to right, #e78b81, #d1df01);
  padding: 30px 25px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-align: center;
  color: #fff;
}
  .user-details .left h4{
  margin-bottom: 10px;
}

.user-details .left p{
  font-size: 12px;
}

.user-details .right{
  width: 65%;
  background: #fff;
  padding: 30px 25px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.user-details .right .info,
.user-details .right .projects{
  margin-bottom: 25px;
}

.user-details .right .info h3,
.user-details .right .projects h3{
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e0e0e0;
    color: #353c4e;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.user-details .right .info_data,
.user-details .right .projects_data{
  display: flex;
  justify-content: space-between;
}

.user-details .right .info_data .data,
.user-details .right .projects_data .data{
  width: 45%;
}

.user-details .right .info_data .data h4,
.user-details .right .projects_data .data h4{
    color: #353c4e;
    margin-bottom: 5px;
}

.user-details .right .info_data .data p,
.user-details .right .projects_data .data p{
  font-size: 13px;
  margin-bottom: 10px;
  color: #919aa3;
}

.user-details .social_media ul{
  display: flex;
}

.user-details .social_media ul li{
  width: 45px;
  height: 45px;
  background: linear-gradient(to right,#01a9ac,#01dbdf);
  margin-right: 10px;
  border-radius: 5px;
  text-align: center;
  line-height: 45px;
}

.user-details .social_media ul li a{
  color :#fff;
  display: block;
  font-size: 18px;
}      
      
  









  `;



  @property({ type: String }) successMessage = '';
  @property({ type: String }) errorMessage = '';
  @property({ type: String }) loginDate = '';
  @property({ type: Object }) user: any;
  @property({ type: Object }) isEditing = false;


  constructor() {
    super();
    this.user = null;
    this.loginDate = "";
    this.isEditing = false;
  }

  connectedCallback() {
    super.connectedCallback();
    // Retrieve user data and login date from localStorage
    const storedUser: any = localStorage.getItem('user');
    const storedLoginDate = localStorage.getItem('loginDate');

    if (storedUser) {
      //  this.user = JSON.parse(storedUser);
      this.user = JSON.parse(localStorage.getItem('user') || '{}') as User;

    }

    if (storedLoginDate) {
      this.loginDate = storedLoginDate;
    }
  }


  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  updateLoginDate(e: any) {
    this.loginDate = e.target.value;
  }

  saveDate() {



    localStorage.setItem('loginDate', this.loginDate);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.isEditing = false;


  }

  handleInputChange(e: any) {
    const field = e.target.name; // Get the field name
    const value = e.target.value; // Get the updated value
    this.user = { ...this.user, [field]: value }; // Update the user object
  }

  render() {
    return html`
 <div class="user-details">
  <div class="left">

    <h4>${this.user.firstName} ${this.user.lastName}</h4>
    <p>${this.user.ocupation}</p>
  </div>

  <div class="right">
    <div class="info">
      <h3>Information</h3>

      <div class="info_data">
        <div class="data">
          <h4>Email</h4>
          <p>${this.user.email}</p>
        </div>
      <div class="data">
        <h4>Phone</h4>
        <p> ${this.user.phone}</p>

      </div>
    </div>
      <div class="info_data">
        <div class="data">
          <h4>City</h4>
          <p>${this.user.city}</p>
        </div>
      <div class="data">
        <h4>Country</h4>
        <p> ${this.user.country}</p>

      </div>
    </div>
     <div class="projects">
            <h3>Projects</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Recent</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                 </div>
                 <div class="data">
                   <h4>Most Viewed</h4>
                    <p>dolor sit amet.</p>
              </div>
            </div>
      </div>
    
  </div>
 </div>
    `;
  }
}
