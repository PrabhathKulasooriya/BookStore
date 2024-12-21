// BooksTable.jsx
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

function BooksTable({ books }) {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center items-center gap-x-2">
                <PiBookOpenTextLight className="text-2xl" />
                <h2 className="text-lg">{book.title}</h2>
              </div>
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              <div className="flex justify-center items-center gap-x-2">
                <BiUserCircle className="text-2xl" />
                <h2 className="text-lg">{book.author}</h2>
              </div>
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BiShow className="text-2xl text-green-600" />
                </Link>
                <Link to={`/edit-book/${book._id}`}>
                  <MdOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/delete-book/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BooksTable;
