import Newsletter from "./Newsletter";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
         <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-green-500 to-green-200 text-transparent bg-clip-text">
              Ready 
            </span>{" "}
            to  
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-green-500 to-green-200 text-transparent bg-clip-text">
              elevate
            </span>{" "}
            your script supervision  {" "}
            <span className="text-green-500 underline" >experience?</span>
          </h2>
        </main>
        
        
        

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 pb-8 lg:pb-12">
         From importing scripts to exporting reports and handling amendments to automating form filling The Script App respects your dedication to accuracy and efficiency by offering time-saving management tools, giving you a better work/life balance.
        </p>

       
      </div>

      
 
      <div className="z-10">
        
      <h2 className="text-3xl md:text-4xl font-bold pl-5">
          Join our 
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {" "}
            Waiting list{" "}
          </span>
          for early access
        </h2>
      <Newsletter/>
      </div>
      

     
      <div className="shadow"></div>
    </section>
  );
 
};
