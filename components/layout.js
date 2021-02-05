import React, {useState} from "react";
import Header from "./Header";
import SideMenuBar from "./SideMenuBar";


function LayoutComponent(props) {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => setOpen(!open);

    return (
        <div>
            <Header leftIcon={handleDrawerOpen}/>
            <SideMenuBar open={open}/>
            {props.children}
        </div>
    );
}

export default LayoutComponent;