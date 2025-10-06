import React, { useEffect, useState } from "react";
import BookCard from "./bookCards";
import booksdata from "./bookData";
import Header from "../../components/header";
import Hero from "../../components/hero";

const Books = () => {
    const [searchTerm , setSearchTerm] = useState('');
    const [sortCriteria , setSortCriteria] = useState('');
    const [filteredBook , setFilteredBook] = useState(booksdata);

    // Effect for filtering and sorting books using searchTerm or sortCriteria
    useEffect(() => {
        let tempBooks = [...booksdata]; // create a copy of booksdata 

        // filtering
        if (searchTerm) {
            tempBooks = tempBooks.filter(book =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        // Sorting
        tempBooks.sort((a , b) => {
            switch (sortCriteria) {
                case 'title-asc':
                    return a.title.localeCompare(b.title);
                case 'title-desc':
                    return b.title.localeCompare(a.title);
                case 'year-asc':
                    return a.year - b.year;
                case 'year-desc':
                    return b.year - a.year;
                case 'rating-desc':
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });
        setFilteredBook(tempBooks);
    } , [searchTerm, sortCriteria]); // dependance , effect should action when those values changes

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    const handleSort = (criteria) => {
        setSortCriteria(criteria);
    }

  return (
    <div>
        <div className="rounded-none bg-gradient-to-r from-blue-500 to-blue-900">
        <Header onSearch={handleSearch} onSortChange={handleSort} />
        <Hero />
        </div>
        <div className="bg-gray-50 py-14 px-14 w-full">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Book Collection
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-stretch">
            {filteredBook.map((book) => (
            <BookCard key={book.id} book={book} />
            ))}
        </div>
        </div>
    </div>
  );
};

export default Books;
