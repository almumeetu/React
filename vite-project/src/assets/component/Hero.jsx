
const Hero = () => {
    return (
        <div>
            <img style={
                { width: "100%", height: "500px", objectFit: "cover" }
            } className="heroImage" src="/src/assets/images/Background.png" alt="Hero Image" />
        </div>
    );
};

export default Hero;

