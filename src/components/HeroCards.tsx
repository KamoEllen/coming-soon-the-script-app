 // Adjust the path to your image
import Newsletter from './Newsletter';

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-2 relative">
      
        <h2 className="text-3xl md:text-4xl font-bold pl-5">
          Join our 
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {" "}
            Waitlist{" "}
          </span>
          for early access
        </h2>

        
      
      <Newsletter/>
    </div>
  );
};
