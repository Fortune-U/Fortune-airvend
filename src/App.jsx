import { Provider } from 'react-redux'
import { store } from './store/store'
import { useSelector } from 'react-redux'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'



const AppContent = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  return (
    <div>
      {isAuthenticated ? <Dashboard /> : <LoginPage />}
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App
