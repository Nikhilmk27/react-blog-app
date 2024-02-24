import Navbar from './Navbar';
import BlogDetails from './blogDetails';
import Create from './creat';
import Home from './home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
          <Route exact path ="/">
            <Home></Home>
          </Route>
          <Route path ="/create">
            <Create></Create>
          </Route>
          <Route path ="/blogs/:id">
            <BlogDetails></BlogDetails>
          </Route>
          <Route>
            <NotFound path ="*"></NotFound>
          </Route>
          </Switch> 
        </div>
      </div>
      </Router>
  );
}

export default App;
