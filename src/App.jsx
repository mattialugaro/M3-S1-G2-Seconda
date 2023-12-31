import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
// import AllTheBooks from './components/AllTheBooks';
import horror from "./data/horror.json";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={horror}/>
      {/* <AllTheBooks /> */}
      <MyFooter />
    </>
  )
}

export default App