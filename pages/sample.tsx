import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";

const Sample = () => {
  const sigCanvas = useRef<SignaturePad>(null);

  const clearCanvas = () => {
    if (sigCanvas.current != null) {
      sigCanvas.current.clear();
    }
  };

  return (
    <div>
      <SignaturePad
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ width: 500, height: 200, className: "rounded-lg" }}
        backgroundColor="white"
      />
      <button
        onClick={() => clearCanvas()}
        className="px-4 py-2 bg-avocado-200 text-white text-xl"
      >
        Clear
      </button>
    </div>
  );
};

export default Sample;
