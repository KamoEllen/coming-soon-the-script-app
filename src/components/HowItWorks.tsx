import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCheck } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features = [
  {
    icon: <CheckCheck className="text-green-500" />,
    title: "Import scripts",
    description: "Import, edit and manage scripts. Merge amendments with The Script App. Spend more time supervising, less time on administrative tasks.",
  },
  {
    icon: <CheckCheck className="text-green-500" />,
    title: "Automate Form Filling",
    description: "Automate repetitive tasks like form filling and formatting, allowing you to focus on creative aspects of script supervision.",
  },
    // Point 1: Data is always ready for you to use at work
  {
    icon: <CheckCheck className="text-green-500" />,
    title: "Always Accessible",
    description: "Store and access folders, photos, and reports securely from any location, ensuring your data is always ready for you to use at work.",
  },
  {
    icon: <CheckCheck className="text-green-500" />,
    title: "Intuitive User Interface",
    description: "Enjoy a user-friendly interface that enhances workflow efficiency.",
  },
  {
    icon: <CheckCheck className="text-green-500" />,
    title: "Customizable Workflow",
    description: "Tailor the interface to your project's needs, optimizing efficiency and adapting to unique requirements.",
  },
  {
    icon: <CheckCheck className="text-green-500" />,
    title: "Real-Time Collaboration",
    description: "Keep the units in sync throughout production. Export sides and share documents instantly to maintain clarity.",
  },


  // Point 2: Your data is secure
  {
    icon: <CheckCheck className="text-green-500" />,
    title: "Secure Storage",
    description: "Ensure the security of your data with encrypted storage for folders, photos, and reports, protecting your information.",
  },

  {
    icon: <CheckCheck className="text-green-500" />,
    title: "Performance Tracking ",
    description: "Gain insights into script progress with real-time change tracking.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
           Prime{" "}
        </span>
         Features
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Where efficiency meets creativity and collaboration flows smoothly. 
      </p>
{/* Here are some of the key features that make The Script App the best choice for script supervisors. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};


{/*
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCheck } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <CheckCheck />,
    title: "Breakdown impot scripts",
    description:
      "Import, edit, and manage scripts merge amendments with The Script App. Spend more time supervising, less time on administrative tasks.",
 },
  {
    icon: <CheckCheck />,
    title: "Automate copy and paste documents",
    description:
      "Automate repetitive tasks like form filling and formatting, allowing you to focus on creative aspects of script supervision.",
  },
  {
    icon: <CheckCheck />,
    title: "Storage Integration",
    description:
      "Securely store and access folders, photos and reports from anywhere.",
  },
  {
    icon: <CheckCheck />,
    title: "Real-Time Collaboration",
    description:
      "Export your sides and reports and share it with your team , ensuring everyone is on the same page throughout the production process.",
  },
  {
    icon: <CheckCheck />,
    title: "Intuitive User Experience",
    description:
      "Enjoy a user-friendly customisable interface designed to enhance your workflow and elevate the script supervision experience.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Here are some of the key features that make The Script App the best choice for script supervision.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
*/}
