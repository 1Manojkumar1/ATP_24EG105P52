import './App.css'
import Navbar from './components/Navbar';
import UsersList from './components/UsersList';
import Footer from './components/Footer';

function App() {
    //state
    //return
    return (
        <div>
            <div>
                <Navbar />
                <UsersList />
                <Footer />
            </div>
        </div>
    );
}

export default App