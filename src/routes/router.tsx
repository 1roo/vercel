import { ReactNode } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/Home';
import KakaoRedirect from '@/pages/auth/KakaoRedirect';
import Myplace from '@/pages/mypage/Myplace';
import EditUser from '@/pages/mypage/EditUser';
import Mypage from '@/pages/mypage/Mypage';
import Main from '@/pages/Main';
import useIsLoggedIn from '@/hooks/useIsLoggedIn';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = useIsLoggedIn();
  return isLoggedIn ? <Navigate to="/" /> : children;
};

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/api/user/kakao/callback',
        element: <KakaoRedirect />,
      },
      {
        path: '/myplace',
        element: <Myplace />,
      },
      {
        path: '/mypage/edit',
        element: <EditUser />,
      },
      {
        path: '/mypage',
        element: (
          <ProtectedRoute>
            <Mypage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/main',
        element: <Main />,
      },
    ],
  },
]);
export default router;
