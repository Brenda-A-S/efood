import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import RoutesConfig from './routes'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <RoutesConfig />
      </BrowserRouter>
    </Provider>
  )
}

export default App
