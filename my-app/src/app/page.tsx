"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type VehicleMake = {
  MakeId: number;
  MakeName: string;
};

const CarDealerApp: React.FC = () => {
  const [vehicleMakes, setVehicleMakes] = useState<VehicleMake[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const isbuttonDisabled = !selectedBrand || !selectedYear;

  useEffect(() => {
    const fetchVehicleMakes = async () => {
      try {
        const response = await fetch(
          "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
        );
        const data = await response.json();
        setVehicleMakes(data.Results);
      } catch (error) {
        console.error("Error ao buscar as marcas de veículos", error);
      }
    };
    fetchVehicleMakes();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 text-white">

      <Image src="/img/logo.png" alt="Car Dealer Logo" width={400} height={400} />


      <h1 className="text-6xl font-bold mb-4">Welcome To My Dealer Cars</h1>
      <p className="text-center mb-6">
        Here, you can find an incredible selection of vehicles for all tastes and needs.
        <br />
        Select the make and year of your ideal car and see the available options.
      </p>

      <div className="mb-4 w-full max-w-md">
        <label htmlFor="marca" className="font-bold text-orange-500">Select the brand</label>
        <select
          id="brand"
          className="block w-full mt-2 border rounded-md text-black"
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">Chose one brand</option>
          {vehicleMakes.map((make) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>


      <div className="mb-4 w-full max-w-md">
        <label htmlFor="year" className="font-bold text-orange-500">Select the year</label>
        <select
          id="year"
          className="block w-full border rounded-md text-black"
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Chose one year</option>
          {Array.from({ length: new Date().getFullYear() - 2014 }, (_, i) => 2015 + i).map(
            (year) => (
              <option key={year} value={year}>
                {year}
              </option>
            )
          )}
        </select>
      </div>

      <Link
        href={selectedBrand && selectedYear ? `/result/${selectedBrand}/${selectedYear}` : '#'}
        className={`bg-orange-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ${
          isbuttonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'
        }`}
        aria-disabled={isbuttonDisabled}
      >
        Search
      </Link>
    </div>
  );
};

export default CarDealerApp;
