import React from "react";
import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "unauthenticated-app";

// import { TsReactTest } from "screens/project-list/try-use-array";
// import { ProjectListScreen } from "screens/project-list/index";
import "./App.css";
import { AuthenticatedApp } from "authenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}

      {/* <TsReactTest/> */}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
