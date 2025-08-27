import { type Map } from "mapbox-gl";

type ElevationOptions = {
  tileSize?: number;
  maxZoom?: number;
  exaggeration?: number;
};

export const loadDEM = (map: Map, options?: ElevationOptions) => {
  map.on("style.load", () => {
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.terrain-rgb",
      tileSize: options?.tileSize ?? 512,
      maxzoom: options?.maxZoom ?? 30,
    });

    map.setTerrain({ source: "mapbox-dem", exaggeration: options?.exaggeration ?? 1 });
  });
};
