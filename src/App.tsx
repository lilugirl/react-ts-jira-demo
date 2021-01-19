import React from "react";
import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "unauthenticated-app";

// import { TsReactTest } from "screens/project-list/try-use-array";
// import { ProjectListScreen } from "screens/project-list/index";
import "./App.css";

import { AuthenticatedApp } from "authenticated-app";

import { FullPageErrorFallback } from "components/lib";
import { ErrorBoundary } from "components/error-boundary";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}

      {/* <TsReactTest/> */}

      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
