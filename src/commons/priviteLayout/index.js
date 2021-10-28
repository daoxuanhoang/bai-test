import { Redirect } from "react-router";
import ManagerUserPage from "../../modules/managerUser/pages/index";
import UserProfilePage from "../../modules/userProfile/pages/index";
import { Route } from "react-router-dom";
import DashboardPage from "../../modules/dashboard/pages/index";

const privateLayout = ({ users }) => {
  if (users.email === "") {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Route exact path="/">
        <DashboardPage />
      </Route>
      <Route exact path="/magager-user" component={ManagerUserPage} />
      <Route exact path="/user-profile" component={UserProfilePage} />
    </div>
  );
};
export default privateLayout;
