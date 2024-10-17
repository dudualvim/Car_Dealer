"use client";

import React from 'react';
import Image from 'next/image';
import { useVehicleModels } from '../../hooks/useVehicleModels'; // Importa o hook personalizado

const ResultPage = ({ params }: { params: { makeId: string; year: string } }) => {
  const { makeId, year } = params;

  // Usa o hook personalizado para buscar os dados
  const { models, isLoading, error } = useVehicleModels(makeId, year);

  // Exibe o estado de carregamento
  if (isLoading) {
    return <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">Loading...</div>;
  }

  // Exibe o estado de erro
  if (error) {
    return <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <Image src="/img/logo.png" alt="Car Dealer Logo" width={250} height={250} />

      <h1 className="text-4xl font-bold mb-4">Models for {makeId} and year {year}</h1>

      <ul className="w-full max-w-md bg-gray-700 rounded-lg shadow-lg p-6">
        {models.length ? (
          models.map((model, index) => (
            <li key={index} className="border-b border-gray-600 py-2 text-lg">
              {model.Make_Name} <span className="text-orange-500">{model.Model_Name}</span>
            </li>
          ))
        ) : (
          <p className="text-center">No model found for this make and year.</p>
        )}
      </ul>

      <button
        className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 mb-8"
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </div>
  );
};

export default ResultPage;
