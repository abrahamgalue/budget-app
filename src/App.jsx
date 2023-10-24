import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Layouts
import Main, { mainLoader } from './layouts/Main'

// Actions
import { logoutAction } from './actions/logout'

// Routes
import DashBoard, { dashboardLoader } from './pages/Dashboard'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <DashBoard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
