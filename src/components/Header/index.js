import { IoIosSearch } from "react-icons/io";
import { LiaUserAltSolid } from "react-icons/lia";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./index.css"

const Header = (props) => {
    const {changeTab} = props

    const clickMensTab = () => {
        changeTab("\"men's clothing\"")
    }

    const clickWomensTab = () => {
        changeTab("\"women's clothing\"")
    }

    const clickElectronicsTab = () => {
        changeTab("\"electronics\"")
    }

    const clickJewelleryTab = () => {
        changeTab("\"jewelery\"")
    }

    return (
    <div className="header-container">
        <div className="header-alignment">
        <h1 className="company-name">T A N N T R I M</h1>
        <div>
        <IoIosSearch className="react-icons"/>
        <LiaUserAltSolid className="react-icons"/>
        <CiBookmark className="react-icons"/>
        <HiOutlineShoppingBag className="react-icons"/>
        </div>
        </div>
        <div className="header-products-category-container">
            <p className="header-category" onClick={clickMensTab}>Mens</p>
            <p className="header-category" onClick={clickWomensTab}>Womens</p>
            <p className="header-category" onClick={clickElectronicsTab}>Electronics</p>
            <p className="header-category" onClick={clickJewelleryTab}>Jewellery</p>
        </div>
    </div>
)
    }

export default Header