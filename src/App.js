import './App.css';
import Page from './components/PageComponent/Page';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
    return (
        <div className="App">
            <Router>
                <Page />
            </Router>
        </div>
    );
}

export default App;
