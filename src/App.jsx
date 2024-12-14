import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// layout
import Layout from "./layout/Layout";

// pages
import HomePage from "./page/HomePage";

// config
import defaultOptions from "./configs/reactQuery.js";

const queryClient = new QueryClient({ defaultOptions: defaultOptions });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <HomePage />
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
