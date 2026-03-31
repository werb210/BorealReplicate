import { AppRouter as Router } from "@/router/AppRouter";
import FloatingChat from "./components/FloatingChat";
import MayaWidget from "@/components/MayaWidget";
import LeadForm from "@/components/LeadForm";

function shouldRenderGlobalMaya(): boolean {
  const path = window.location.pathname.toLowerCase();
  return !path.startsWith("/contact") && !path.startsWith("/credit-results");
}

function App() {
  const showMaya = shouldRenderGlobalMaya();

  return (
    <>
      <Router />
      <LeadForm />
      {showMaya ? <MayaWidget /> : null}
      {showMaya ? <FloatingChat /> : null}
    </>
  );
}

export default App;
