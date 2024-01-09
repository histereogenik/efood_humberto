import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import RoutesComponent from './routes'
import Footer from './components/Footer'

import { GlobalCss } from './styles'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <RoutesComponent />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
