import { Route, Routes } from "react-router";
import { ROUTES } from "./routes";
import { HomePage } from "@pages/homepage";
import { TaskDetailsPage } from "@pages/task-details-page";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
      <Route
        path={ROUTES.TASKDETAILSPAGE + "/:id"}
        element={<TaskDetailsPage />}
      />
    </Routes>
  );
};
