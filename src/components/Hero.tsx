import Newsletter from "./Newsletter";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
         {/* Button */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://example.com"
          className="flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-current text-green-600"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path>
          </svg>
          <p className="text-sm font-semibold text-[#0a5526]">Compatible with: IOS & MacOS</p>
        </a>
        {/* Button ends */}
        {/*
         <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-green-300 to-green-500 text-transparent bg-clip-text">
              Ready 
            </span>{" "}
            to  
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-green-300 to-green-500 text-transparent bg-clip-text">
              elevate
            </span>{" "}
            your script supervision  {" "}
            <span className="text-green-500 underline" >experience</span>
            ?
          </h2>
        </main>
        */}
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Ready{" "}
            <span>
              to
            </span>{" "}
          </h1>{" "}
          <h2 className="inline">
            elevate{" "}
            <span>
              your script supervision{" "}
            </span>{" "}
            <span className="inline text-green-500 bg-clip-text">
              experience
            </span>
             
              ?
            {/* <span className="inline text-green-200 bg-clip-text"> </span> */}
            
          </h2>
        </main>
        
        

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 pb-8 lg:pb-12">
         From importing scripts to exporting reports and handling amendments to automating form filling The Script App respects your dedication to accuracy and efficiency by offering time-saving management tools, giving you a better work/life balance.
        </p>
        

       
      </div>

      
 
      <div className="z-10">
        
      <h2 className="text-3xl md:text-4xl font-bold pl-5">
          Join our 
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text mb-4">
            {" "}
            Waiting list{" "}
          </span>
          for early access
        </h2>
        <p className="text-sm text-center text-gray-500 mt-2 mb-4">
                **Don't worry, we won't spam you.**
              </p>
      <Newsletter/>
      </div>
      

     
      <div className="shadow"></div>
    </section>
  );
 
};
