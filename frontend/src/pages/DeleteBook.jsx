import React,{useState} from 'react'
import axios from 'axios'
import Backbutton from '../components/Backbutton'
import Spinner from '../components/Spinner'
import { useParams, useNavigate } from 'react-router-dom'

function DeleteBook() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  const {id} = useParams()

  const deleteBook = () =>{
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened while deleting the book');
        console.log(error);
      });

  }

  return (
    <div className='p-4'>
      <Backbutton/>
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className='flex flex-col items-center border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
        <button className='bg-red-600 text-white m-8 w-full' onClick = {deleteBook}>Delete Book</button>
      </div>
    </div>
  )
}

export default DeleteBook
