import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import DetailContainer from './containers/DetailContainer';
import ListContainer from './containers/ListContainer';
import { AppProvider } from './context/Context';

function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path='/'>
						<ListContainer />
					</Route>
					<Route exact path='/pokemon/:id'>
						<DetailContainer />
					</Route>
				</Switch>
			</BrowserRouter>
		</AppProvider>
	);
}

export default App;
