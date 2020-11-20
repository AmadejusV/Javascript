import Header from "../header/Header";
import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";

function App(){
    return(
        <div className="app">
            <Header/>
            {/* <Nav /> */}
            <Main/>
            <Footer/>
        </div>

    )
}

export default App;