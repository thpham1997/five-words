import './App.css';
import Words from './Words';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Words word="true"/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
