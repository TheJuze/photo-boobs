import React from "react";
import { RegistrationForm, LoginForm } from "compositions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { constants } from "helpers";

const App = () => (
  <BrowserRouter>
    <div className="flex min-h-full justify-center items-center">
      <Routes>
        <Route path={constants.routes.registration} element={<RegistrationForm />} />
        <Route path={constants.routes.login} element={<LoginForm />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
