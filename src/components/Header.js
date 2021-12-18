import React from "react";

function Header ({id, name}){
    
    return (
        <header className={id}>
        <h1>{name}</h1>
        </header>
    )

}

export default Header;