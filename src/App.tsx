import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AuthPage from "./Pages/AuthPage/AuthPage";
import HomePage from "./Pages/HomePage/HomePage";
import PrivateRouter from "./hok/PrivateRouter";
import PersonalizationPage from "./Pages/PersonalizationPage/PersonalizationPage";
import { FavoritePage } from "./Pages/FavoritePage/FavoritePage";
import { Layout } from "./components/ui/Layout/Layout";
import { ChatRoom } from "./components/ChatRoom/ChatRoom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PrivateRouter />}>
              <Route index path="/" element={<HomePage />} />
            </Route>
            <Route path="/registration" element={<AuthPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route element={<PrivateRouter />}>
              <Route
                path="/personalization"
                element={<PersonalizationPage />}
              />
            </Route>
            <Route element={<PrivateRouter />}>
              <Route path="/favorite" element={<FavoritePage />} />
            </Route>
            <Route element={<PrivateRouter />}>
              <Route path="/room/:userId" element={<ChatRoom />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
