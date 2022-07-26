import { Routes, Route } from 'react-router-dom'
import { History } from '../Pages/History/History'
import { Home } from '../Pages/Home/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
