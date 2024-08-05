import Header from "../Header/Header";
import Body from "../Body/Body";
import { FooterStyled } from "../Footer/Footer.styled";
const Page = () => {
    return (
        <div className="page-container">
            <Header />
            <Body />
            <FooterStyled />
        </div>
    )
}

export default Page;