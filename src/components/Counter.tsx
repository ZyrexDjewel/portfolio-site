import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="p-4 border rounded-lg text-center">
            <p className="text-lg font-medium">Count: {count}</p>
            <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded=lg hover:bg-blue-600"
                onClick={() => setCount((prev) => prev + 1)}
            >
                Increment
            </button>
        </div>
    );
}