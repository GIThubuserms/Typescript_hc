import {createContext, useContext, useState} from 'react'

type themetype="light" | "dark"

interface themecontext{
  theme:themetype,
  changetheme:()=>void
}

const ThemeContext=createContext<themecontext|null>(null)


export const ThemeProvider=({children}:{children:React.ReactNode})=>{
    const [theme,settheme]=useState<themetype>("light")

    const changetheme=()=>{
        console.log("Theme changed!");
        settheme(prev=>prev==="light"?"dark":'light')
    }

return (
    <ThemeContext.Provider value={{theme,changetheme}}>
        {children}
    </ThemeContext.Provider>
)

}


export const useThemeContext=()=>{
return useContext(ThemeContext)
}