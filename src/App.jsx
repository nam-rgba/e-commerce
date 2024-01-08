import { Routes, Route} from 'react-router-dom'
import Layout from './pages/quiz/Question'
import Term from './pages/term/Term'
import Exits from './pages/exits/Exits'
import Thank from './pages/thanks/Thank'


function App() {


  return (
    <Routes>
      <Route path="/" element={<Term />} />
      <Route path="questions" element={<Layout />}/>
      <Route path="exits" element={<Exits />}/>
      <Route path="thank" element={<Thank />}/>

    </Routes>
  )
}

export default App
