import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { composeWithDevTools } from 'redux-devtools-extension'
import localForage from 'localforage'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import rootReducer from './rootReducer'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const persistConfig = {
  key: 'ui_react_base',
  storage: localForage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let middlewarePackeges = [thunk]
if (process.env.NODE_ENV === 'development') {
  let { logger } = require('redux-logger')
  middlewarePackeges.push(logger)
}
const middleware = applyMiddleware(...middlewarePackeges)

let enhancers
if (process.env.NODE_ENV === 'development') {
  enhancers = composeWithDevTools(middleware)
} else {
  enhancers = compose(middleware)
}

export const store = createStore(persistedReducer, enhancers)
export const persistor = persistStore(store)

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
)
registerServiceWorker()
