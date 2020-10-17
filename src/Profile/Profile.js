import React from 'react';
import sarra from "../Sarra.jpg";
class Profile extends React.Component {
    state = {
        fullName: "Sara", bio: "cinéma", imgSrc: { sarra }, profession: 'Résponsable communication',
        show: false
    };
    render() {
        return (
            <>
                <button onClick={() => this.setState({ show: !this.state.show })}> ClickMe </button>
                {
                    this.state.show && (<>
                        <p>{this.state.fullName}</p>
                        <p>{this.state.bio}</p>
                        <p>{this.state.profession}</p>
                    </>)
                }




            </>
        );
    }
}

export default Profile;
