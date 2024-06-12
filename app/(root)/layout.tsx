import { StreamCallProvider } from "@stream-io/video-react-sdk";
import React, { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamCallProvider>{children}</StreamCallProvider>
    </main>
  );
}

export default RootLayout;
