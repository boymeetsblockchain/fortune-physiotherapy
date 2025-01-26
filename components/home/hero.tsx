import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

export const HeroSection = async () => {
  // Save user to the database if available

  return (
    <div
      className={cn(
        "relative h-[500px] md:h-[600px] lg:h-[700px] bg-center bg-cover flex items-center justify-center"
      )}
      style={{ backgroundImage: 'url("/hero.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 md:px-8 lg:px-12">
        <h1
          className={cn(
            "text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          )}
        >
          WELCOME TO FORTUNE PHYSIOTHERAPY CLINIC
        </h1>
        <h2
          className={cn(
            "text-xl md:text-3xl lg:text-4xl text-white uppercase font-medium mb-6"
          )}
        >
          A leading private physiotherapy facility in Benin City, Edo State,
          Nigeria.
        </h2>

        {/* CTA Button */}
        <Button className="bg-blue-500  text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-500 hover:border-ubepsa dark:bg-[#0C4860] dark:hover:bg-[#0C4860] dark:hover:text-white border border-transparent">
          <Link href={"#contact"}>Book an Appointment</Link>
        </Button>
      </div>
    </div>
  );
};
