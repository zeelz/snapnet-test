import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
