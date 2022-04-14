import Nav from "./nav";

const Header = ({headerMenu}) => {
    return (
        <header className="bg-gray-800">
            <Nav headerMenu={headerMenu} />
        </header>
    );
}
 
export default Header;