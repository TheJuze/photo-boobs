import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "context";

import {
  HomePage, ProfilePage, LoginPage, RegistrationPage,
} from "pages";
import { constants } from "helpers";

const App = () => (
  <ProfileProvider>
    <BrowserRouter>
      <Routes>
        <Route path={constants.routes.home} element={<HomePage />} />
        <Route path={constants.routes.profile} element={<ProfilePage />} />
        <Route path={constants.routes.registration} element={<RegistrationPage />} />
        <Route path={constants.routes.login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </ProfileProvider>
);

export default App;
