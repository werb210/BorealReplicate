import { Component, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Unhandled UI error", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#020817] px-6 py-16 text-white">
          <div className="mx-auto max-w-xl rounded-2xl border border-white/20 bg-[#08132a] p-6 text-center">
            <h1 className="text-2xl font-semibold">Something went wrong</h1>
            <p className="mt-3 text-slate-300">Please refresh the page to continue.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
