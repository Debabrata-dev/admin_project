import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WalletIcon from '@mui/icons-material/Wallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LoginIcon from '@mui/icons-material/Login';

export const SidebarData =[
   
    {
        icon:  DashboardIcon,
        heading: " Dashboard",
        link: "/"
      },
      {
        icon: MedicationLiquidIcon,
        heading: " Therapist",
        link: "/Therapist"
      },
      {
        icon: ManageAccountsIcon,
        heading: " Therapist Details",
        link: "/Therapist Details"
      },
      {
        icon: PersonAddIcon,
        heading: ' Client',
        link: "/client"
      },
      {
        icon:WalletIcon,
        heading: ' wallet',
        link: "/wallet"
      },
      {
        icon:EventNoteIcon,
        heading: ' Report',
        link: "/report"
      },
      {
        icon:EmailIcon,
        heading: ' Messages',
        link: "/Message"
      },
      {
        icon:NotificationsIcon,
        heading: ' Notification',
        link: "/N"
      },
      {
        icon:SettingsIcon,
        heading: " Setting",
        link: "/Setting"
      },
      {
        icon:LoginIcon,
        heading: " Log out",
        link: "/L"
      }

]
  
