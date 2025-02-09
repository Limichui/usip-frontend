//import './App.css'
//import Navigator from './components/navigation/Navigator.jsx';
import Router from './components/navigation/Router.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
/* 
import Home  from './screens/Home.jsx'
import { Counter } from "./components/counter/Counter.jsx"
import Product from "./screens/Product.jsx"
*/

function App() {
  return (
    <AuthProvider>
        <Router />
    </AuthProvider>
  )
}

export default App;