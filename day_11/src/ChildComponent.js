import react from "react";

const ChildComponent = ({user}) => {
    const {name, section, email} = user;
    return (
        <div>
            <h1>Name: "Luven"</h1>
            <h2>Section: "CSE-18"</h2>
            <h3>Email: "lakshsharma32534@gmail.com"</h3>
        </div>
    )

}

export default ChildComponent;