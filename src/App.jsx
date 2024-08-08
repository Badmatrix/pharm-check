import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Pharmacy from "./pages/Pharmacy";
import PharmacyDetail from "./pages/PharmacyDetail";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/pharmacy/:id" element={<PharmacyDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
