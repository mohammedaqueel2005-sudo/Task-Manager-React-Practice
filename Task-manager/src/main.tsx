import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import AuthStore from './context/AuthContext.tsx'
import TaskStore from './context/TaskContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthStore>
    <TaskStore>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskStore>
  </AuthStore>
)
