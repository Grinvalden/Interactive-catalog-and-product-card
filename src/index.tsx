import React from "react";
import { createRoot } from "react-dom/client";
import App from "./api/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = createRoot(document.getElementById("root")!);

const queryClient = new QueryClient();

const render = () => {
    root.render(
    <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider> 
    );
};


render();


declare const module: {
    hot?: {
        accept: (path?: string, callback?: () => void) => void;
    };
};

if (module.hot) {
    console.log("HMR is enabled");
    module.hot.accept("./api/App", () => {
        console.log("HMR: Accepting updated module...");
        render();
    });
} else {
    console.log("HMR is not enabled");
}