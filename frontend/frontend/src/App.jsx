
import './App.css'
import Index from './components/index';
import AddBooks from './components/addBooks';
import NavBar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import BooksRead from './components/booksRead';
import WantToRead from './components/wantToRead';
import { BookProvider } from './context/bookShelf';

function App() {

  return (
    <>
    <BookProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/addBooks' element={<AddBooks />} />
      <Route path='/myBooks' element={<BooksRead />} />
      <Route path='/wantToRead' element={<WantToRead />} />
     </Routes>
     </BookProvider>
    </>
  )
}

export default App
