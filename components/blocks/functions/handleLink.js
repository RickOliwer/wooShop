import Link from "next/link";

const HandleLink = ({ path, classes, title}) => {
    if(!path){
        return null
    }
    return (
        <Link href={path}>
            <a className={classes}>{title}</a>
        </Link>
    );
}
 
export default HandleLink;