// importing packages
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/*importing resources */
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {

    /*state decleartion */
    const [videoSrc, setVideoSrc] = useState();

    /*funtion decleartion */
    const handelVideoSrc = () => {
        setVideoSrc(window.innerWidth < 768 ? smallHeroVideo : heroVideo);
    };

    /*useEffect */
    useEffect(() => {
        handelVideoSrc();
        window.addEventListener("resize", handelVideoSrc);

        // event listener clean up
        return () => window.removeEventListener("resize", handelVideoSrc);

    }, []);

    /*useGSAP */
    useGSAP(() => {
        gsap.to("#hero", { duration: 1, opacity: 1, delay: 1.5 });

        gsap.to("#cta", { duration: 1, opacity: 1, y: -70, delay: 2 });
    });

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">
                    iPhone 15 Pro
                </p>

                {/* hero video section  */}
                <div className=" w-9/12 md:w-10/12">
                    <video
                        className=" pointer-events-none"
                        autoPlay
                        muted
                        playsInline
                        loop
                        key={videoSrc}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* buy section  */}
            <div id="cta" className="flex-center flex-col items-center opacity-0 translate-y-20">
                <a href="#highlights" className="btn">Buy</a>

                <p>From $199/month or $999</p>
            </div>
        </section>
    );
};

export default Hero;
