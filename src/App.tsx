import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import EventComponent from './Components/EventComponent';
import EnvitedContextProvider from './context/EnvitedContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <EnvitedContextProvider>
        <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="create" element={<Create />}/>
          <Route path="event" element={<EventComponent />}/>
        </Routes>
      </EnvitedContextProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
