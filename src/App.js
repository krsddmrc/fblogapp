import AuthContextProvider from './context/AuthContext';
import './App.css';
import AppRouter from "./app-router/AppRouter"

function App() {
  return (
    <div >
      <AuthContextProvider>
        <AppRouter/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
