// Import components
import {ReactComponent as Brand} from "../../assets/TestMe_logo.svg"
import {ReactComponent as Master} from "../../assets/mastercard.svg"
import {ReactComponent as Paypal} from "../../assets/Paypal.svg"

export const TopFooter = [
    {
        head: <Brand />,
        para: "The evaluation engine evaluates your performance and helps you to improve. Get new and unique sets of questions each time you take the assignment.",
        type: "brand"
    },
    {
        head: "Follow Us",
        para: "We are available on the given social media platform.",
        type: "follow",
        facebook: <i className="fab fa-facebook"></i>,
        twitter: <i className="fab fa-twitter"></i>
    },
    {
        head: "Contact Us",
        type: "contact",
        email: "hello@testme.com",
        phone: "0123-456-789"
    }
];

export const BottomFooter = [
    {
        head: "Information",
        links: [
            {link: "About Us"},
            {link: "Terms and Conditions"},
            {link: "About Us"}
        ]
    },
    {
        head: "Customers",
        links: [
            {link: "Support"},
            {link: "Feedback"}
        ]
    },
    {
        head: "Useful Links",
        links: [
            {link: "Blog"},
            {link: "Careers"}
        ]
    }
];

export const CashCards = [
    {card: <Master />},
    {card: <Paypal />},
    {card: <i className="fab fa-cc-visa"></i>}
]
