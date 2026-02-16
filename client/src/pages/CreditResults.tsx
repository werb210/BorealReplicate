import { useLocation } from "wouter";

export default function CreditResults() {
  const [, navigate] = useLocation();

  return (
    <div className="py-24 text-center">
      <h1 className="mb-6 text-4xl font-semibold">Preliminary Assessment Complete</h1>

      <p className="mb-10 text-slate-400">Based on your responses, you may qualify for structured financing options.</p>

      <button
        onClick={() => {
          navigate("/");
          window.location.href = "https://client.boreal.financial";
        }}
        className="rounded-lg bg-white px-8 py-3 text-black"
      >
        Continue to Full Application
      </button>
    </div>
  );
}
