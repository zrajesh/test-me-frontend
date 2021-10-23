import { Link } from "react-router-dom";

const AccountButton = ({buttonData}) => {
    const {text, toLink, btnClass} = buttonData;
    return (
        <div className="account-buttons">
            <Link 
             to={toLink}
             className="linku"
             >
            <button
             className={"account-button " + btnClass}
            >{text}</button>
            </Link>
        </div>
    );
};

export default AccountButton;