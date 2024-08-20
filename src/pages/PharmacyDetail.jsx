import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

export default function PharmacyDetail() {
  const { id } = useParams()
  const query = ''
  console.log(query)
  
  return <main className=" col-span-3">PharmacyDetail - { id}</main>
}
