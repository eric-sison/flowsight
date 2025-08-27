"use client";

import { FunctionComponent, useEffect, useRef } from "react";
import { loadDEM } from "@/utils/elevation";
import mapboxgl, { LngLatLike, type Map } from "mapbox-gl";

type MapboxProps = {
  accessToken: string;
  center?: LngLatLike | undefined;
};

export const Mapbox: FunctionComponent<MapboxProps> = ({
  accessToken,
  center = [125.17156346582044, 6.115231095125566],
}) => {
  const mapRef = useRef<Map>(undefined);
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      accessToken,
      container: mapContainer.current as HTMLElement,
      style: "mapbox://styles/mapbox/light-v11",
      projection: "mercator",
      zoom: 15.25,
      center,
    });

    if (mapRef.current) {
      loadDEM(mapRef.current);
    }

    mapRef.current?.on("click", (e) => {
      console.log(mapRef.current?.queryTerrainElevation(e.lngLat));
    });

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return <div id="map-container" ref={mapContainer} />;
};
