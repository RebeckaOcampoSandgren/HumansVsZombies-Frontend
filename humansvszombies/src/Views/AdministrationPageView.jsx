import AdministratorPage from '../Component/AdministrationPage';
import NavbarLandningPage from '../Component/HOC/NavbarLandningPage';
import KeycloakRoute from '../Component/HOC/KeycloakRoute';


const AdministrationPageView = () => {
    return(
        <>
        {/* <KeycloakRoute role='Admin'> */}
        <NavbarLandningPage/>
        <AdministratorPage/>
        {/* </KeycloakRoute> */}
        </>
    )
}
export default AdministrationPageView