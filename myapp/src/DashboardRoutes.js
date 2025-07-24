import React from 'react'
import {Routes,Route} from "react-router-dom"
import PrivateRoutes from './Utils/PrivateRoutes'
import RolebaseRoutes from './Utils/RolebaseRoutes'
import Admin_dashboard from './Components/Admin_dashboard'
import DashboardHome from './Components/dashboard/DashboardHome.jsx'
import PolicStation from './Components/dashboard/PolicStation.jsx'
import Request from './Components/dashboard/Request.jsx'
import AddPoliceStation from './Components/dashboard/AddPoliceStation.jsx'
import ChangePassword from './Components/dashboard/ChangePassword.jsx'
import Editps from './Components/dashboard/Editps.jsx'
import User_dashboard from './Components/User_dashboard.jsx'
import UserHome from './Components/UserDashboard/UserHome.jsx'
import UserRequisition from './Components/UserDashboard/UserRequisition.jsx'
import Vendor from './Components/UserDashboard/Vendor.jsx'
import Profile from './Components/UserDashboard/Profile.jsx'
import UserAddItem from './Components/UserDashboard/UserAddItem.jsx'
import UserEditItem from './Components/UserDashboard/UserEditItem.jsx'

function DashboardRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/admin-dashboard' element={<PrivateRoutes>
                <RolebaseRoutes requiredRole={["admin"]}>
                    <Admin_dashboard/>
                </RolebaseRoutes>
            </PrivateRoutes>}>
            <Route index element={<DashboardHome/>}/>
            <Route path='/admin-dashboard/ps' element={<PolicStation/>}/>
            <Route path='/admin-dashboard/requests' element={<Request/>}/>
            <Route path='/admin-dashboard/settings/addps' element={<AddPoliceStation/>}/>
            <Route path='/admin-dashboard/settings/change-password' element={<ChangePassword/>}/>
            <Route path='/admin-dashboard/policestation/:id' element={<Editps/>}/>
            </Route>
            <Route path='/user-dashboard' element={<PrivateRoutes>
                <RolebaseRoutes requiredRole={["user"]}>
                    <User_dashboard/>
                </RolebaseRoutes>
            </PrivateRoutes>}>
            <Route index element={<UserHome/>}/>
            <Route path='/user-dashboard/requisition' element={<UserRequisition/>}/>
            <Route path='/user-dashboard/vendor' element={<Vendor/>}/>
            <Route path='/user-dashboard/settings/profile' element={<Profile/>}/>
            <Route path='/user-dashboard/settings/changepassword' element={<ChangePassword/>}/>
            <Route path='/user-dashboard/userhome/additem' element={<UserAddItem/>}/>
            <Route path='/user-dashboard/userhome/additem/:item_ID' element={<UserEditItem/>}/>

            </Route>
            
        </Routes>
    </div>
  )
}

export default DashboardRoutes