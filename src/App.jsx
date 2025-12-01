import { BrowserRouter,  Route, Routes} from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import OtherRoutes from "./routes/OtherRoutes";
import PublicRoutes from "./routes/PublicRoutes";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/*Public Routes */}
        {PublicRoutes}

        {/*User Routes */}
        {UserRoutes}

        {/*Admin Routes */}
        {AdminRoutes}

        {/*Error and Misc Pages */}
        {OtherRoutes}

      </Routes>
    </BrowserRouter>
  )
}

export default App
