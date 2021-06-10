import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import { AdminPanel } from './components/AdminPanel';
const store = configureStore();

function App() {
  return (
      <Provider store = {store}>
        <AdminPanel />
      </Provider>
  );
}

export default App;
