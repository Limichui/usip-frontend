const OpenLink = ({ redirectURL, LogoImage }) => {
    return (
        <>
            <a href={ redirectURL } target="_blank">
                <img src={ LogoImage } className="logo" alt="Logo"/>
            </a>
        </>
    );
};

export default OpenLink;