"use client";
import { useState } from "react";
import Image from "next/image";
import { cardsData } from "../../data/cardsData";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      {/* Search Input */}
      <div className="flex items-center gap-3 px-5 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 border border-gray-500 
               hover:border-orange-500 
               focus:border-orange-500 
               focus:outline-none 
               focus:ring-2 focus:ring-orange-300
               text-white bg-transparent rounded-lg 
               transition-all duration-300"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-lg hover:border-orange-500 hover:bg-orange-200/20 transition duration-300"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
              className="rounded-sm object-cover w-full h-48"
            />
            <h3 className="mt-4 text-lg text-white font-semibold shadow-lg text-center">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
