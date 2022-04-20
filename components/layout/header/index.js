import Nav from "./nav";

const Header = ({headerMenu}) => {
    return (
        <header className="">
            <Nav headerMenu={headerMenu} />
        </header>
    );
}
 
export default Header;