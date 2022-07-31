import { useEffect, useState } from 'react';
import { db } from "./firebase-config";
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import './App.css';

function App() {

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: parseInt(newAge) });
  }

  const handleUserRemove = async (id) => {
    const userToDelete = doc(db, "users", id);
    await deleteDoc(userToDelete);
  }

  const handleAgeInc = async (id, age) => {
    const _ = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(_, newFields);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getUsers();
  }, []);

  return (
    <div className="App">
      <input type="text" placeholder='name' onChange={(e) => setNewName(e.target.value)}/>
      <input type="age" placeholder='number' onChange={(e) => setNewAge(e.target.value)}/>
      
      <button onClick={createUser}>Add a new user</button>
      {users.map((user, i) => {
        return (
          <div key={i}>
            <h1>name: {user.name}</h1>
            <h1>age: {user.age}</h1>
            <button onClick={() => handleAgeInc(user.id, user.age)}>Increase age</button>
            <button onClick={() => handleUserRemove(user.id)}>Remove user</button>
          </div>
        )
      })}
      <Link to="/imgUp"><button>Test Image Uploading</button></Link>
    </div>
  );
}

export default App;
