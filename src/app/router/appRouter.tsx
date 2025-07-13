import { Route, Routes } from "react-router";
import { HomePage } from "src/pages/homepage";
import { ROUTES } from "./routes";
import { TaskDetailsPage } from "src/pages/task-details-page";

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
