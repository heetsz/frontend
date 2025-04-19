import React, { useEffect, useState } from "react";

const MapWithPincode = () => {
  const [map, setMap] = useState(null);
  const [pincode, setPincode] = useState("");
  const [clickedLocation, setClickedLocation] = useState(null);

  // Load Google Maps script and define the initMap globally
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Expose initMap to window
    window.initMap = () => {
      const mumbai = { lat: 19.076, lng: 72.8777 };
      const mapInstance = new window.google.maps.Map(document.getElementById("map"), {
        center: mumbai,
        zoom: 12,
      });

      setMap(mapInstance);

      const geocoder = new window.google.maps.Geocoder();

      mapInstance.addListener("click", (e) => {
        const latLng = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        };
        setClickedLocation(latLng);
        reverseGeocode(geocoder, latLng);
      });
    };

    document.body.appendChild(script);
  }, []);

  // Get pincode using reverse geocoding
  const reverseGeocode = (geocoder, latLng) => {
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          const postalComponent = results[0].address_components.find((comp) =>
            comp.types.includes("postal_code")
          );

          if (postalComponent) {
            setPincode(postalComponent.long_name);
          } else {
            setPincode("Pincode not found.");
          }
        } else {
          setPincode("No results found.");
        }
      } else {
        setPincode("Geocoder failed due to: " + status);
      }
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Click on the Map to Get the Pincode</h2>

      {clickedLocation && (
        <p>
          Lat: {clickedLocation.lat.toFixed(5)}, Lng: {clickedLocation.lng.toFixed(5)}
        </p>
      )}

      {pincode && <h3>Pincode: {pincode}</h3>}

      <div
        id="map"
        style={{ height: "500px", width: "100%", border: "2px solid #000", marginTop: "20px" }}
      ></div>
    </div>
  );
};

export default MapWithPincode;
