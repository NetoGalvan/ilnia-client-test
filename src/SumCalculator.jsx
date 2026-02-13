import { useState } from "react";

function SumCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const calculateSum = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/sum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          a: Number(a),
          b: Number(b)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Server error");
      }

      setResult(data.sum);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        placeholder="A"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        type="number"
        placeholder="B"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateSum}>
        Calculate
      </button>

      <br /><br />

      {loading && <p>Calculating...</p>}

      {result !== null && <p>Result: {result}</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SumCalculator;
