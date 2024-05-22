"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
// "use client";

// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { useState } from "react";

// const ReactQueryProvider = ({ children }) => {
//   const [queryClient] = useState(() => new QueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// };

// export default ReactQueryProvider;
// "use client";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// export default function Providers({ children }) {
//   const [queryClient] = React.useState(() => new QueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// }
