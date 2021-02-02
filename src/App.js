import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import PageNotFoundPage from './pages/PageNotFoundPage';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/article-list" component={ArticleListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={PageNotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
