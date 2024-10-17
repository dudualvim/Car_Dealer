// src/app/result/[makeId]/[year]/loading.tsx

import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Carregando os dados...</h1>
      <p className="mt-4">Aguarde enquanto carregamos os modelos de veículos.</p>
    </div>
  );
}
