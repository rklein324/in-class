// Main.js file
'use strict';

// Data: a group of people
const PEOPLE_LIST = [
    { name: "Jacob", interest: "Board Games" },
    { name: "James", interest: "Music" },
    { name: "Rebecca", interest: "Books" }
];

// Class for an individual person
class Person extends React.Component {
    render () {
        return (
            <div class="person">
                <p>Hello, my name is {this.props.name} and I am interested in {this.props.interest}.</p>
            </div>
        )
    }
}

// Class to represent a group of people
class People extends React.Component {
    render () {
        return (this.props.group.map((d) => {
            return <Person key={d.name} name={d.name} interest={d.interest} />
        }))
    }
}

// Render your component in the `main` section
ReactDOM.render(
    <People group={PEOPLE_LIST} />,
    document.querySelector('main')
)