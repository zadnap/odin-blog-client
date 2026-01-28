import { Outlet } from 'react-router';
import { AuthProvider } from '@/providers';

function App() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}

export default App;
