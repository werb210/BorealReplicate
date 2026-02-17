import { Link } from "wouter";

export default function CreditResults() {
  const score = "green"; // green | yellow | red

  const getColor = () => {
    if (score === "green") return "bg-green-600";
    if (score === "yellow") return "bg-yellow-500";
    return "bg-red-600";
  };

  const getMessage = () => {
    if (score === "green") {
      return "You are a prime candidate for structured funding based on the information provided. While no guarantees are made, your profile aligns strongly with lender criteria.";
    }

    if (score === "yellow") {
      return "You are likely eligible for funding, though certain structural or documentation considerations may need to be addressed. We can help position your file correctly.";
    }

    return "Your current profile may present challenges, but structured financing solutions may still be available. Strategic positioning will be important.";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0c1a2b] px-6 text-white">
      <div className="w-full max-w-2xl rounded-2xl bg-[#111f35] p-10 shadow-xl">
        <div className={`mb-6 h-3 w-full rounded-full ${getColor()}`} />

        <h1 className="mb-4 text-3xl font-bold">Your Readiness Assessment</h1>

        <p className="mb-8 text-white/80">{getMessage()}</p>

        <div className="flex gap-4">
          <Link href="/apply" className="rounded-full bg-blue-600 px-6 py-3 hover:bg-blue-500">
            Start Application
          </Link>

          <Link href="/contact" className="rounded-full border border-white/20 px-6 py-3">
            Speak With Advisor
          </Link>
        </div>
      </div>
    </div>
  );
}
