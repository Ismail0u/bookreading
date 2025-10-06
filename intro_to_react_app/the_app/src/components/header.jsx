
// the header of  the books pages 

import React, {useState} from "react";

const Header = ({ onSearch, onSortChange }) => {

    const [searchTerm , setSearchTerm] = useState('');
    const [sortCriteria , setSortCriteria] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortCriteria(value);
        onSortChange(value);
    };

    return (
        <header className="main-header fixed top-0 left-0 w-full z-50 text-white p-4 shadow-lg flex flex-col sm:flex-row justify-between items-center backdrop-blur-xl bg-opacity-50 animate-fade-in pb-8">
            <h1 className="text-3xl font-bold pl-5 mb-2 sm:mb-0 transform hover:scale-105 transition-transform duration-300">
            library
            </h1>
      
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
                        {/* Search field */}
                <div className="relative w-full sm:w-64 animate-slide-in-left">
                    <input
                        type="text"
                        placeholder="Search a book..."
                        className="p-2 pl-10 rounded-full w-full ring-2 ring-offset-white text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white focus:text-gray-800 transition-all duration-300"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>

                    {/* sort selector*/}
                <div className="relative w-full sm:w-48 animate-slide-in-right">
                    <select
                        className="p-2 rounded-full w-full text-gray-800 appearance-none bg-white pr-8 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300"
                        value={sortCriteria}
                        onChange={handleSortChange}
                    >
                        <option value="title-asc">Title (A-Z)</option>
                        <option value="title-desc">Title (Z-A)</option>
                        <option value="year-asc">year (oldest)</option>
                        <option value="year-desc">year (most recent)</option>
                        <option value="rating-desc">Rate (best)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;