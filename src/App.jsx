import { Routes, Route} from 'react-router-dom'
import Term from './pages/page1/Term'


function App() {


  return (
    <Routes>
      <Route path="/*" element={<Term />} />
    </Routes>
  )
}

export default App
