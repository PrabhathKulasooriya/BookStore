import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";

function ShowBooks() {
  const [book, setBook] = useState(null); // Change initial state to null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        console.log("API Response:", response.data);
        // Check if response.data has the book information directly
        const bookData = response.data.data || response.data;
        setBook(bookData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
        setError("Failed to fetch book details.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : book ? ( // Only render book details if book exists
        <div className="flex flex-col border-2 border-sky-400 rounded-xl p-4 w-fit">
          {book._id && (
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id:</span>
              <span>{book._id}</span>
            </div>
          )}
          {book.title && (
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title:</span>
              <span>{book.title}</span>
            </div>
          )}
          {book.author && (
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author:</span>
              <span>{book.author}</span>
            </div>
          )}
          {book.publishYear && (
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year:</span>
              <span>{book.publishYear}</span>
            </div>
          )}
          {book.createdAt && (
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Created At:</span>
              <span>{new Date(book.createdAt).toLocaleString()}</span>
            </div>
          )}
          {book.updatedAt && (
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Last Update Time:
              </span>
              <span>{new Date(book.updatedAt).toLocaleString()}</span>
            </div>
          )}
        </div>
      ) : (
        <div>No book found</div>
      )}
    </div>
  );
}

export default ShowBooks;
