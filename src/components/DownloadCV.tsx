import { useState, useEffect } from "react";

export default function DownloadCV() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto";  
    }
  }, [showModal]);

  const confirmDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "My_CV.pdf";
    link.click();
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="mt-6 px-4 py-2 bg-[#C69749] text-white font-semibold rounded-md shadow hover:bg-[#a87c37] transition"
      >
        Download CV
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50"
        onClick={() => setShowModal(false)} 
        >
          <div className="bg-white p-6 rounded-md shadow-md"
          onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-4 text-[#1C1C1C] font-semibold">
              Do you want to download my CV?
            </p>
           <div className="flex gap-4 w-full">
            <button
                onClick={confirmDownload}
                className="flex-1 px-4 py-2 bg-[#C69749] text-white rounded-md hover:bg-[#a87c37]"
            >
                Yes
            </button>
            <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
                Cancel
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
