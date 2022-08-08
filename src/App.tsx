import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "context";
import { constants } from "helpers";
import {
  HomePage, ProfilePage, LoginPage, RegistrationPage, AuthPage,
} from "pages";

const App = () => (
  <div className="bg-accent h-full">
    <ProfileProvider>
      <BrowserRouter>
        <Routes>
          <Route path={constants.routes.home} element={<HomePage />} />
          <Route path={constants.routes.profile} element={<ProfilePage />} />
          <Route path={constants.routes.auth} element={<AuthPage />} />
          <Route path={constants.routes.registration} element={<RegistrationPage />} />
          <Route path={constants.routes.login} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  </div>
);

export default App;
