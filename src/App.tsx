import { BrowserRouter } from 'react-router-dom'

import RoutesComponent from './routes'
import Footer from './components/Footer'

import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <RoutesComponent />
      <Footer />
    </BrowserRouter>
  )
}

export default App
