import AdministratorPage from '../Component/AdministrationPage';
import NavbarLandningPage from '../Component/HOC/NavbarLandningPage';
import RenderOnRole from '../Service/RenderOnRole';
import NotAllowed from '../Service/NotAllowed';

const AdministrationPageView = () => {
    return(
        <>
        <RenderOnRole roles={['Admin']}>
        <NavbarLandningPage/>
        <AdministratorPage/>
        </RenderOnRole>
        <RenderOnRole roles={['User']}>
        <NotAllowed/>
        </RenderOnRole>
        </>
    )
}
export default AdministrationPageView