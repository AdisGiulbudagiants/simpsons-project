import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
const Main = lazy(() => import('./pages/Main.jsx'))
const RandomQuotes = lazy(() => import('./pages/RandomQuotes.jsx'))
const CustomizedQuotes = lazy(() => import('./pages/CustomizedQuotes.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
import Error from './components/Error/Error.jsx'
import CloudsBg from './assets/cloudsBg.jpg'

function App() {
  return (
    <BrowserRouter>
      <div
        className="h-[100dvh] overflow-x-hidden bg-center bg-cover"
        style={{ backgroundImage: `url(${CloudsBg})` }}
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="/random" element={<RandomQuotes />} />
            <Route path="/customized" element={<CustomizedQuotes />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Error />
      </div>
    </BrowserRouter>
  )
}

export default App
