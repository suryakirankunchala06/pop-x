function Account() {
  return (
    <div className="mobile-wrapper">
      <div className="account-card">
        <div className="account-title">Account Settings</div>

        <div className="profile-row">
          <div className="avatar-wrapper">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="avatar"
              className="avatar"
            />
            <div className="edit-badge">✎</div>
          </div>

          <div className="profile-info">
            <h4>Marry Doe</h4>
            <p>Marry@gmail.com</p>
          </div>
        </div>

        <p className="account-desc">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
        </p>

        <div className="divider"></div>
      </div>
    </div>
  );
}

export default Account;