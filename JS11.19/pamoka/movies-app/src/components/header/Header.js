import "./header.scss"
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'


function Header(){
    return (
        <header className="container m-3">
            <form action="" className="row input-group mb-3">
                    <input type="search" className="col-4 form-control" placeholder="Search film..."/>
                    <div className="input-group-append">
                        <span className="input-group-text">Paieska</span>
                    </div>
            </form>
        </header>
    )
}

export default Header;