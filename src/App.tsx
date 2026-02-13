import './styles/design-system.css';
import Hero from './sections/Hero';
import Receipts from './sections/Receipts';
import ChangeOrders from './sections/ChangeOrders';
import DailyLogs from './sections/DailyLogs';
import Dashboard from './sections/Dashboard';
import Invoicing from './sections/Invoicing';
import Closing from './sections/Closing';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Receipts />
      <ChangeOrders />
      <DailyLogs />
      <Dashboard />
      <Invoicing />
      <Closing />
    </div>
  );
}

export default App;
