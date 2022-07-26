import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../Layouts/DefaultLayout'
import { History } from '../Pages/History/Index'
import { Home } from '../Pages/Home/Index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
