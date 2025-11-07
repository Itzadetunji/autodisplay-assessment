import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { VehicleDocument } from "@/types/vehicle";

interface VehicleResponse {
  success: boolean;
  data: VehicleDocument;
  error?: string;
}

export function useVehicle(slug: string) {
  return useQuery({
    queryKey: ["vehicle", slug],
    queryFn: async (): Promise<VehicleDocument> => {
      const response = await api.get<VehicleResponse>(`/${slug}`);

      if (!response.data.success) {
        throw new Error(response.data.error || "Failed to fetch vehicle data");
      }

      return response.data.data;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  });
}
