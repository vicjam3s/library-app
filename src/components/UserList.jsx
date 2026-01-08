const UserList = ({ users }) => {
  return (
    <div className="section">
      <h3>All Users</h3>

      {users.map(user => (
        <div key={user.id} className="card">
          {user.name} - {user.role}
        </div>
      ))}
    </div>
  );
};

export default UserList;

