import './styles/index.scss';
import ReactDOM from 'react-dom';

import App from './App';
import ResponsiveProvider from './providers/responsive_provider';
import ThemeProvider from './providers/theme_provider';
import OutingsProvider from './providers/outings_provider';
import AuthProvider from './providers/auth_provider';
import { BrowserRouter } from 'react-router-dom';
import CouplesProvider from './providers/couples_provider';

ReactDOM.render(
	<BrowserRouter>
		<ResponsiveProvider>
			<ThemeProvider>
				<AuthProvider>
					<CouplesProvider>
						<OutingsProvider>
							<App />
						</OutingsProvider>
					</CouplesProvider>
				</AuthProvider>
			</ThemeProvider>
		</ResponsiveProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
