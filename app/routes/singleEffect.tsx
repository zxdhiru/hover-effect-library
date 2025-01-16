import React, { useState } from "react";
import { useParams } from "react-router";
import { effects } from "~/components/effects";

const SingleCard = () => {
  const { effectName } = useParams();
  const effect = effects.find((effect: any) => effect.name === effectName);

  const [tailwindCopied, setTailwindCopied] = useState(false);
  const [vanillaCopied, setVanillaCopied] = useState(false);

  const copyToClipboard = (text: string, setCopiedState: React.Dispatch<React.SetStateAction<boolean>>) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 3000); // Reduced duration for better UX
  };

  return (
    <div className="text-white p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Effect: {effectName}
      </h1>
      <p className="text-lg text-center mb-8">
        {effect?.description || "No description available for this effect."}
      </p>

      {/* Effect Preview and Code Details */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white/90 rounded-lg p-8 shadow-lg">
        {/* Preview Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            className={`bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-6 flex justify-center items-center w-full max-w-sm h-40 text-xl font-semibold border border-gray-300 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl ${effect?.className}`}
          >
            {effectName || "Effect Preview"}
          </div>
        </div>

        {/* Code Section */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-50 text-gray-800 p-6 rounded-lg shadow-md border border-gray-200">
            {/* Tailwind ClassName */}
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
              Tailwind ClassName
            </h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <p className="text-sm font-mono bg-gray-100 p-4 rounded-lg border border-gray-300 flex-1 break-words">
                {effect?.className || "Effect not found"}
              </p>
              <button
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onClick={() =>
                  copyToClipboard(
                    effect?.className || "Effect not found",
                    setTailwindCopied
                  )
                }
              >
                {tailwindCopied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Vanilla CSS */}
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-indigo-700">
              Vanilla CSS
            </h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <p className="text-sm font-mono bg-gray-100 p-4 rounded-lg border border-gray-300 flex-1 break-words">
                {effect?.vanillaCSS || "Vanilla CSS not available"}
              </p>
              <button
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onClick={() =>
                  copyToClipboard(
                    effect?.vanillaCSS || "Vanilla CSS not available",
                    setVanillaCopied
                  )
                }
              >
                {vanillaCopied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
