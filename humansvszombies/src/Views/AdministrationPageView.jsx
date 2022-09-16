import AdministratorPage from '../Component/AdministrationPage';
import NavbarLandningPage from '../Component/HOC/NavbarLandningPage';
import RenderOnRole from '../Component/RenderOnRole';
import NotAllowed from '../routes/NotAllowed';


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