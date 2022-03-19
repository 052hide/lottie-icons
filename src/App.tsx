import { Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import TopPage from './routes/Top'

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<TopPage />} />
      </Routes>
    </RecoilRoot>
  )
}

export default App
