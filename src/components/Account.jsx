import React from 'react'
import './Account.css'
const Account = () => {
  return (
    <div>
      <section className="section1_Acc">
  <div className="acc_container">

    <div className="acc_sidebar">
      <p className="title">Manage My Account</p>
      <ul>
        <li className="active">My Profile</li>
        <li>Address Book</li>
        <li>My Payment Options</li>
      </ul>

      <p className="title">My Orders</p>
      <ul>
        <li>My Returns</li>
        <li>My Cancellations</li>
      </ul>

      <p className="title">My WishList</p>
    </div>

    {/* RIGHT CONTENT */}
    <div className="acc_content">
      <h2>Edit Your Profile</h2>

      <div className="form_grid">
        <div>
          <label>First Name</label>
          <input type="text" placeholder="Md" />
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Rimel" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" placeholder="rimel111@gmail.com" />
        </div>

        <div>
          <label>Address</label>
          <input type="text" placeholder="Kingston, 5236, United State" />
        </div>
      </div>

      <div className="password">
        <label>Password Changes</label>
        <input type="password" placeholder="Current Password" />
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm New Password" />
      </div>

      <div className="buttons">
        <button className="cancel">Cancel</button>
        <button className="save">Save Changes</button>
      </div>
    </div>

  </div>
</section>
    </div>
  )
}

export default Account