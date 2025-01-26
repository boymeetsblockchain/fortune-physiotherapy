import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#060012] text-white">
      <div className="container mx-auto py-10 px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* Left Section - Clinic Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-2xl font-bold">Fortune Physiotherapy Clinic</h1>
            <p className="mt-4 text-sm leading-relaxed">
              41, Iwehen Street, near St. Peter's Anglican Church Bishop Court,
              <br />
              or Idia College Back Gate, Benin City, Edo State, Nigeria.
            </p>
            <p className="mt-2 text-sm">
              Phone:{" "}
              <a href="tel:+2348035027408" className="underline">
                08035027408
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href="https://maps.app.goo.gl/esnBfPu2QZpTA2AdA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Fortune Physiotherapy Clinic. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
