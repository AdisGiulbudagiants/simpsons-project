import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Main from './pages/Main.jsx'
import RandomQuotes from './pages/RandomQuotes.jsx'
import CustomizedQuotes from './pages/CustomizedQuotes.jsx'
import NotFound from './pages/NotFound.jsx'
import CloudsBg from './assets/cloudsBg.jpg'

function App() {
  return (
    <BrowserRouter>
      <div
        className="w-[100svw] h-[100dvh] overflow-x-hidden bg-center bg-cover"
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
      </div>
    </BrowserRouter>
  )
}

export default App
