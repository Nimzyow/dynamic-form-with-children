import React from "react";
import { Person } from "./Person";
import "./App.css";

function App() {
    return (
        // <Person>
        //   {({}) => {
        //     return <div style={{ color: "green" }}>Meow</div>;
        //   }}
        // </Person>
        <div className="App">
            <FirstComponent>
                <SecondComponent>
                    <ThirdComponent>
                        <ComponentNeedingProps content="this is handled with children" />
                    </ThirdComponent>
                </SecondComponent>
            </FirstComponent>
        </div>
    );
}

//passing props
// const FirstComponent = ({ content }) => {
//     return (
//         <div>
//             <h3>I am the first component</h3>
//             <SecondComponent content={content} />
//         </div>
//     );
// };

// render children
const FirstComponent = ({ children }) => {
    return (
        <div>
            <h3>I am the first component</h3>
            {children}
        </div>
    );
};

//passing props
// const SecondComponent = ({ content }) => {
//     return (
//         <div>
//             <h3>I am the second component</h3>
//             <ThirdComponent content={content} />
//         </div>
//     );
// };

// render children
const SecondComponent = ({ children }) => {
    return (
        <div>
            <h3>I am the second component</h3>
            {children}
        </div>
    );
};

//passing props
// const ThirdComponent = ({ content }) => {
//     return (
//         <div>
//             <h3>I am the third component</h3>
//             <ComponentNeedingProps content={content} />
//         </div>
//     );
// };

// render children
const ThirdComponent = ({ children }) => {
    return (
        <div>
            <h3>I am the third component</h3>
            {children}
        </div>
    );
};

const ComponentNeedingProps = ({ content }) => {
    return <h3>{content}</h3>;
};

export default App;
