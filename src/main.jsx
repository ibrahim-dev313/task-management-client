import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider'
import router from './Routes/Route'
import './index.css'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <QueryClientProvider client={queryClient}>

      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>

  </div>
)
