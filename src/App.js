import './App.css';
import AppRouter from './routes/AppRouter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <>
      <PayPalScriptProvider options={{"client-id": "Aeo-CyE89VJQamVr2RKqOWi6heQC2E4MhiiWp7_ZyvZ0Y0a5zQhOKIVxwBPPBU_sLar06Ui8vJhjFqY_"}}>
        <Navbar />
        <AppRouter />
        <Footer />
      </PayPalScriptProvider>
    </>
  );
}

export default App;
