import { Mapbox } from "@/components/Mapbox";
import { createEnv } from "@/utils/createEnv";

export default function MapPage() {
  const apiKey = createEnv().MAPBOX_API_KEY;

  return <Mapbox accessToken={apiKey} />;
}
