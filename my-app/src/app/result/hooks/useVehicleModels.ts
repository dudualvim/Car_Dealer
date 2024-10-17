import { useState, useEffect } from 'react';

type VehicleModel = {
  Make_Name: string;
  Model_Name: string;
};

// Hook personalizado para buscar os modelos de veículos
export const useVehicleModels = (makeId: string, year: string) => {
  const [models, setModels] = useState<VehicleModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicleModels = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch vehicle models");
        }

        const data = await res.json();
        setModels(data.Results || []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicleModels();
  }, [makeId, year]);

  return { models, isLoading, error };
};
