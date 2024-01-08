import { Routes, Route} from 'react-router-dom'
import Layout from './pages/quiz/Question'
import Term from './pages/term/Term'
import Exits from './pages/exits/Exits'


function App() {


  return (
    <Routes>
      <Route path="/" element={<Term />} />
      <Route path="questions" element={<Layout />}/>
      <Route path="exits" element={<Exits />}>
      </Route>
    </Routes>
  )
}

export default App
