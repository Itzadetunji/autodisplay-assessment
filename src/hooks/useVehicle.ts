import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { VehicleDocument } from "@/types/vehicle";
import { AxiosError } from "axios";

interface VehicleResponse {
  success: boolean;
  data: VehicleDocument;
  error?: string;
}

export function useVehicle(slug: string) {
  return useQuery<
    VehicleDocument,
    AxiosError<{
      success: boolean;
      error: string;
    }>
  >({
    queryKey: ["vehicle", slug],
    queryFn: async (): Promise<VehicleDocument> => {
      const response = await api.get<VehicleResponse>(`/${slug}`);

      return response.data.data;
    },
    staleTime: 10 * 60 * 1000,
    retry: 2,
  });
}
