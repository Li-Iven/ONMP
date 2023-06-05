import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/index'
import { Provider } from 'react-redux'

import { store } from './shared/store'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>
)
