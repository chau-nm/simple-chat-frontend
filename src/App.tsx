import { type FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BaseRoute } from './BaseRouter';

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <BaseRoute />
      </QueryClientProvider>
    </div>
  );
};

export default App;
