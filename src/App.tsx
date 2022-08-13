import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' />
      <Route path='/signin' />
      <Route path='*' />
    </Routes>
  )
}

export default App
