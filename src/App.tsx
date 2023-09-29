
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import DefaultLayout from './components/Layouts/DefaultLayout';
import './App.css'
import Forecast5Day from './pages/Forecast5Day';
import NoPage from './pages/NoPage';
const queryClient = new QueryClient();
function App() {


	return (
		<>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<DefaultLayout />}>
							<Route index element={<Home />} />
							<Route path="forecast5day" element={<Forecast5Day />} />
							<Route path="*" element={<NoPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</>
	)
}

export default App
