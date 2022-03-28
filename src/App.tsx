import { RoutesProvider } from "./routes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div className="App">
        <ToastContainer/>
        <RoutesProvider/>
        <GlobalStyle/>

    </div>
  );
}

