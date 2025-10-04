// components/ContactUs.jsx
"use client";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Locate, Phone } from "lucide-react";
import Link from "next/link";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -6.254969242039712, // Example: Osaka, Japan coordinates
  lng: 106.81231768137391,
};

const ContactUs = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const mapRef = React.useRef<google.maps.Map | null>(null);

  // Correctly typed onLoad callback
  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
  }, []);

  // Correctly typed onUnmount callback
  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    mapRef.current = null;
  }, []);

  return (
    <section className="bg-gray-100 bg-opacity-10 p-8 md:p-16 rounded-xl m-4 md:m-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-[#061d61] mb-2">
            Contact Us
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 my-3">
          <div className="bg-white bg-opacity-80 rounded-xl shadow-md p-8 flex-1 text-center">
            <div className=" text-[#061d61] w-8 h-8 mb-4 mx-auto">
              <Locate className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#061d61] mb-2">
              Our Address
            </h3>
            <p className="text-lg text-[#061d61]">
              <strong>Graha BS</strong>
              <br />
              Jl. Kemang Utara A No.3, Lantai 3
            </p>
          </div>
          <div className="bg-white bg-opacity-80 rounded-xl shadow-md p-8 flex-1 text-center">
            <div className=" text-[#061d61] w-8 h-8 mb-4 mx-auto">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#061d61] mb-2">
              Our Contact Info
            </h3>
            <p className="text-lg text-neutral-700">
              <a
                href="https://wa.me/6282280853270"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#061d61] hover:underline hover:text-blue-800"
              >
                +62 822 8085 3270
              </a>
              <br />
              <a
                href="mailto:management@lextera.id"
                className="text-[#061d61] hover:underline hover:text-blue-800"
              >
                management@lextera.id
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-md mb-8">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={17}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <Marker position={center} />
            </GoogleMap>
          ) : (
            <div>Loading Map...</div>
          )}
        </div>

        <div className="text-center mt-6">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#061d61] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#061d61] transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
