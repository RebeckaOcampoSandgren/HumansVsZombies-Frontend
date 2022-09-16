import { Route, Switch } from "react-router-dom";
import AdministrationPage from "../Component/AdministrationPage";
import NavbarLandningPage from "../Component/HOC/NavbarLandningPage";
import RolesRoute from "../RolesRoute";

const BookBox = () => (
  <>
  <NavbarLandningPage/>
    <Route>
      <RolesRoute path="/secret" roles={['Admin']}>
        <AdministrationPage/>
      </RolesRoute>
    </Route>
  </>
)

export default BookBox