import { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  // const fullText = "<Abanwa Modestus Chinaza/>";
  const fullText = "<Big Kedy/>";

  // since we did not parse the dependency [] array, the useEffect will run after every render but it will on first, when we first load this page and when the onComplete state changes
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      // we will end the interval
      if (index > fullText.length) {
        clearInterval(intervalId);

        // This will hide the animation/loading screen
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    // we will return and clean everything up and clear the interval incase this component goes to bash before  we are able to clear our interval to avoid  memory leak. This function  runs when the component unmounts or before the effect runs again (if dependencies change). For clearInterval(), this cleanup is crucial to stop the interval and prevent it from running after the component is no longer active.
    return () => clearInterval(intervalId);
  }, [onComplete]);
  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
}

export { LoadingScreen };
