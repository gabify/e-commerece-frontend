import { Route } from "react-router-dom";
import NotFound from "../pages/others/NotFound";
import NotAuthorized from "../pages/others/NotAuthorized";
import Error from "../pages/others/Error";

const OtherRoutes = () =>{
    return(
        <>
            <Route path="/404" element={<NotFound />}/>
            <Route path="/500" element={<Error />}/>
            <Route path="/401" element={<NotAuthorized />}/>
        </>
    )
}

export default OtherRoutes;