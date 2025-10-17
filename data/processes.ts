// Define the updated type for our process steps
type ProcessStep = {
    tag: string;
    title: string;
    description: string;
    image: string; // The path to the image in the /public folder
};

export const processSteps: ProcessStep[] = [
    {
        tag: "Step 01",
        title: "Discovery & Planning",
        description: "We start by understanding your vision and goals to create a tailored strategy.",
        image: "/assets/images/process/45.png",
    },
    {
        tag: "Step 02",
        title: "Design & Prototype",
        description: "Our team crafts a stunning, user-centric design and interactive prototype.",
        image: "/assets/images/process/46.png",
    },
    {
        tag: "Step 03",
        title: "Development & Testing",
        description: "We build your solution with clean code and test it rigorously for performance.",
        image: "/assets/images/process/47.png",
    },
    {
        tag: "Step 04",
        title: "Launch & Optimize",
        description: "We deploy your project and monitor its performance, making data-driven optimizations.",
        image: "/assets/images/process/48.png",
    },
];