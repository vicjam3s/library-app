const Login = ({ users, setCurrentUser }) => {
  return (
    <>
      <h2>Login</h2>

      {users.map((user) => (
        <button
          key={user.id}
          className="login-btn"
          onClick={() => setCurrentUser(user)}
        >
          Login as {user.name}
        </button>
      ))}
    </>
  );
};

export default Login;

