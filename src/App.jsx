import { useState } from "react";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import MovieList from "./components/MovieList";
import UserList from "./components/UserList";

const users = [
  { id: 1, name: "Vic", role: "Admin" },
  { id: 2, name: "Guest", role: "User" },
];

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="container">
      {!currentUser ? (
        <Login users={users} setCurrentUser={setCurrentUser} />
      ) : (
        <>
          <Welcome user={currentUser} setCurrentUser={setCurrentUser} />

          <BookList />
          <MovieList />
          <UserList users={users} />
        </>
      )}
    </div>
  );
}

export default App;



