import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import RoutesComponent from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'

import { GlobalCss } from './styles'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <RoutesComponent />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
