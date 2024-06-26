import { Route, Routes } from "react-router-dom";
import PersonalFormComponent from "./components/FormComponent/PersonalFormComponent";
import HelpCenter from "./components/HelpCenter/helpcenter";
import LabFormComponent from "./components/LabFormComponent/LabFormComponent";
import Logout from "./components/LogOut/LogOut";
import SelectAccountType from "./components/SelectAccountType/SelectAccountType";
import ViewProfileDetails from "./components/ViewProfileDetails/viewProfileDetails";
import ViewUser from "./components/ViewUsers/ViewUser";
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ViewLabs from "./components/ViewLabs/ViewLabs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/user" element={<LayoutPage />}>
        <Route path="" element={<SelectAccountType />} />
        <Route path="createaccount" element={<PersonalFormComponent />} />
        <Route path="createlabaccoount" element={<LabFormComponent />} />
        <Route path="profile" element={<ViewProfileDetails />} />
        <Route path="helpcenter" element={<HelpCenter />} />
        <Route path="logout" element={<Logout />} />
        <Route path='viewallusers' element={<ViewUser />} />
        <Route path='viewalllabs' element={<ViewLabs />} />

      </Route>
    </Routes>
  );
}

export default App;
