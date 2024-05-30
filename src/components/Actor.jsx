/* eslint-disable react/prop-types */

const Actor = (props) => {
    const {Name, hello} = props;
    return (
        <div>
            <li>Name:- {Name}</li>
            <li>Message:- {hello}</li>
        </div>
    );
};

export default Actor;