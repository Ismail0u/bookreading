import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-400 w-full">
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-48"
      />
      <div className="p-3 text-center">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{book.title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold mr-2">{book.author}</span> • <span className="ml-2">{book.year}</span>
        </p>
        <p className="text-gray-700 text-sm line-clamp-3 mb-3 text-center">
          {book.description}
        </p>
        <div className="flex items-center justify-between border-t-1 pt-3 px-2">
          <span className="text-yellow-500 font-semibold">⭐ {book.rating}</span>
          <button className="bg-blue-600 text-white px-3 py-1 border-spacing-y-1 text-sm rounded-lg hover:bg-blue-900 hover:text-gray-100 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
