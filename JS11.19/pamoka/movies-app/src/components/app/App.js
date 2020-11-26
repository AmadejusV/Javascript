import Header from "../header/Header";
import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import Forms from "../form/Forms";
import './app.scss';
import Home from "../home/Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App(){
    return(
        <div className="app">
            <BrowserRouter>
                <Header/>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route to="/form/" component={Forms}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>

    )
}

export default App;