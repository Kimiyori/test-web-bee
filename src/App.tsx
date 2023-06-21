import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActivityPage from "./pages/activity.page";
import Map from "./pages/map.page";
import Time from "./pages/time.page";
import { TimerProvider } from "./features/timerContext";
import MainLayout from "./components/shared/UI/MainLayout";
function App() {
  return (
    <>
      <TimerProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<ActivityPage />} />
              <Route path="/map" element={<Map />} />
              <Route path="/time" element={<Time />} />
            </Route>
          </Routes>
        </Router>
      </TimerProvider>
    </>
  );
}

export default App;
