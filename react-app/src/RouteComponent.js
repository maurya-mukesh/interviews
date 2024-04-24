import React, { useState } from "react";
import NavBar from "./NavBar";
import News from "./News";
import { BrowserRouter as Router, cd , Route } from "react-router-dom";

const App = () => {
  const pageSize = 5;
  const apiKey = "7e409e787e334639b52501e8eba15cf4";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="generals"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          {/* </Route> */}
          {/* Add more routes here if needed */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
