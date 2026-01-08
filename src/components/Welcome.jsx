const Welcome = ({ user, setCurrentUser }) => {
  return (
    <>
      <h1>Welcome, {user.name}</h1>

      <button
        className="logout-btn"
        onClick={() => setCurrentUser(null)}
      >
        Logout
      </button>
    </>
  );
};

export default Welcome;

