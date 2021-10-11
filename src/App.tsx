import { Home } from './pages/home';
import { NewRoom } from './pages/new-room'

import { BrowserRouter, Route } from 'react-router-dom'
import { AuthenticationContextProvider } from './contexts/AuthenticationContextProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthenticationContextProvider>
        <Route path='/' exact component={Home} />
        <Route path='/rooms' component={NewRoom} />
      </AuthenticationContextProvider>
    </BrowserRouter>
  );
}

export default App;
