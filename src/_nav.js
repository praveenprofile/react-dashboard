import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/',
      },

    ],
  },



  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },


  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
