import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "context";
import { constants } from "helpers";
import {
  HomePage, ProfilePage, LoginPage, RegistrationPage, AuthPage, FriendsPage,
} from "pages";
import { useCheckAuth } from "hooks";

const App = () => {
  const { isLoading } = useCheckAuth();

  if (isLoading) {
    return (
      <div>Загрузка...</div>
    );
  }

  return (
    <div className="h-full width-container">
      <ProfileProvider>
        <BrowserRouter>
          <Routes>
            <Route path={constants.routes.home} element={<HomePage />} />
            <Route path={constants.routes.profile} element={<ProfilePage />} />
            <Route path={constants.routes.auth} element={<AuthPage />} />
            <Route path={constants.routes.registration} element={<RegistrationPage />} />
            <Route path={constants.routes.login} element={<LoginPage />} />
            <Route path={constants.routes.friends} element={<FriendsPage />} />
          </Routes>
        </BrowserRouter>
      </ProfileProvider>
    </div>
  );
};

export default App;
