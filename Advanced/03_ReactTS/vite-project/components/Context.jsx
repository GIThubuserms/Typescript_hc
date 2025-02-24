import React, { createContext, useContext, useState } from "react";

// 1️⃣ Define the context type
interface UserContextType {
  name: string;
  age: number;
  setUser: React.Dispatch<React.SetStateAction<UserContextType>>;
}

// 2️⃣ Create the context
const UserContext = createContext<UserContextType | null>(null);

// 3️⃣ Create a provider component
const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserContextType>({ name: "Murtaza", age: 25, setUser: () => {} });

  return (
    <UserContext.Provider value={{ ...user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 4️⃣ Create a custom hook for context access
const useUser = () => {
  return useContext(UserContext);
};

// 5️⃣ Example component using context
const Profile = () => {
  const { name, age, setUser } = useUser();

  return (
    <div>
      <h1>{name} - {age}</h1>
      <button onClick={() => setUser((prev) => ({ ...prev, age: prev.age + 1 }))}>
        Increase Age
      </button>
    </div>
  );
};

// 6️⃣ Main App Component
const App = () => {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
};

export default App;
