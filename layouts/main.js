import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout(props) {
    const {header} = props;

    return (
        <>
            <Header {...header} />
            <main id="main_content" className="p-3 mb-5">{props.children}</main>
            <Footer/>
        </>
    )

}

MainLayout.defaultProps = {
    header: {},
    footer: {}
}

