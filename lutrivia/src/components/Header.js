import React from "react"
import NewGameButton from './NewGameButton'

class Header extends React.Component {
    render(){
        return (
        <>   
            <h1>Lutrivia</h1>
            <section>
                <NewGameButton />
            </section>
        </>
        );
    }
}

export default Header