import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address: string;
  latitude?: number;
  longitude?: number;
}

declare global {
  interface Window {
    google: typeof google;
  }
}

export function GoogleMap({ address, latitude, longitude }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    const geocoder = new window.google.maps.Geocoder();
    
    const initializeMap = () => {
      if (latitude && longitude) {
        // Use provided coordinates
        const map = new window.google.maps.Map(mapRef.current!, {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
        });

        new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map,
          title: address,
        });
      } else {
        // Geocode the address
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const location = results[0].geometry.location;
            const map = new window.google.maps.Map(mapRef.current!, {
              center: location,
              zoom: 15,
              styles: [
                {
                  featureType: 'poi',
                  elementType: 'labels',
                  stylers: [{ visibility: 'off' }],
                },
              ],
            });

            new window.google.maps.Marker({
              position: location,
              map,
              title: address,
            });
          }
        });
      }
    };

    // Wait for Google Maps to load
    if (window.google && window.google.maps) {
      initializeMap();
    } else {
      const timer = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(timer);
          initializeMap();
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [address, latitude, longitude]);

  return <div ref={mapRef} className="w-full h-full" style={{ minHeight: '400px' }} />;
}

