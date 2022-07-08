import React from 'react'
import classes from     './Layout.css'
import Aex from '../../hoc/Aex'

export const Layout = (props) => {
  return (
    <Aex>
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aex>
  )
}
export default Layout