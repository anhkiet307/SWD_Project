import { useContext } from "react"

import { ThemeContext } from "../../App"

export default function Footer() {

    const { theme } = useContext(ThemeContext)

    return (
        <footer className={`bg-${theme} text-center text-${theme === 'dark' ? 'light' : 'dark'} `}>

            
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright: AnhKiet307 
                <a className={`text-${theme === 'dark' ? 'light' : 'dark'}`} href="https://www.facebook.com/Lacccccne"></a>
            </div>
            
        </footer>
    )
}