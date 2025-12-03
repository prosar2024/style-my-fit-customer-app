
import React from "react";

const About = () => {
    return (
        <div className="container pt-32 pb-16">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground mb-8">
                StyleMyFit is committed to revolutionizing how people shop for clothes online by eliminating the guesswork from sizing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-muted-foreground mb-6">
                        Our mission is to create a personalized shopping experience by matching your unique body measurements
                        with clothing that fits perfectly, reducing returns and increasing customer satisfaction.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-muted-foreground mb-6">
                        We envision a world where every online shopper can confidently purchase clothes
                        knowing they&apos;ll fit perfectly the first time, every time.
                    </p>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <p className="text-muted-foreground mb-6">
                    StyleMyFit was founded by a team of fashion industry experts and technology innovators
                    who recognized the need for better sizing solutions in online shopping.
                </p>
            </div>
        </div>
    );
};

export default About;
