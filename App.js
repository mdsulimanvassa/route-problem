import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import Book from './components/Book/Book';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { createContext} from 'react';
import { useState } from 'react';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';

export const UserContex = createContext();
function App() {
  const [loggInUser, setLoggInUser] = useState(false);
  return (
    <UserContex.Provider value={[loggInUser, setLoggInUser]}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route element={<PrivateRoutes/>}>
          <Route path='/book/:bedType' element={<Book/>} exact/>
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </UserContex.Provider>
  );
}

export default App;
