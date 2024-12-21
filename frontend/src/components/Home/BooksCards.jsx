import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";

function BooksCards({ books }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((book) => (
        <div
          key={book._id}
          className="border-2 border-gray-200 rounded-lg hover:shadow-xl transition duration-300"
        >
          {/* Card Header - Title */}
          <div className="border-b p-4 bg-gray-50">
            <div className="flex items-center gap-x-2">
              <PiBookOpenTextLight className="text-2xl text-blue-600" />
              <h2 className="font-semibold text-xl truncate">{book.title}</h2>
            </div>
          </div>

          {/* Card Body - Author & Year */}
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-x-2 text-gray-600">
              <BiUserCircle className="text-xl" />
              <p className="truncate">{book.author}</p>
            </div>
            <div className="flex items-center gap-x-2 text-gray-600">
              <AiOutlineCalendar className="text-xl" />
              <p>{book.publishYear}</p>
            </div>
          </div>

          {/* Card Footer - Actions */}
          <div className="border-t p-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <Link
                to={`/books/details/${book._id}`}
                className="flex items-center gap-x-1 text-green-600 hover:text-green-800"
              >
                <BiShow className="text-2xl" />
                <span>Show</span>
              </Link>
              <Link
                to={`/edit-book/${book._id}`}
                className="flex items-center gap-x-1 text-yellow-600 hover:text-yellow-800"
              >
                <MdOutlineEdit className="text-2xl" />
                <span>Edit</span>
              </Link>
              <Link
                to={`/delete-book/${book._id}`}
                className="flex items-center gap-x-1 text-red-600 hover:text-red-800"
              >
                <MdOutlineDelete className="text-2xl" />
                <span>Delete</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BooksCards;
