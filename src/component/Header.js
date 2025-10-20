// Header.js
import React from "react";
export default function Header({titre ,score }) {
  return (
    <header className="bg-blue-300 text-white p-6 text-center">
      <h1 className="text-3xl font-bold underline">
        {titre}
      </h1>
      <h4 className="mt-5 text-3xl font-semibold text-purple-400">Score Actuel :{score}</h4>
    </header>
  );
}
