import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

export default function SidebarProvider({ children }) {


    const [ isSidebar_Open, setIsSidebarOpen ] = useState(false);

    

    function sidebarOpen() {
        setIsSidebarOpen(true);     
    }

    function sidebarClose() {
        setIsSidebarOpen(false);
    }


    
    useEffect(()=>{
        console.log(isSidebar_Open);
        
    },[isSidebar_Open])

    
    return <SidebarContext.Provider value={{

        is_Sidebar: isSidebar_Open,
        sidebarOpen,
        sidebarClose
    }}>




        {children}
    </SidebarContext.Provider>
}