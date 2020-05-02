import React from "react";
import Particles, { IParticlesParams } from "react-particles-js";
import svg from "../../assets/deer_head.svg";

// const useStyles = makeStyles((theme: Theme) => createStyles({

const params: IParticlesParams = {
    fps_limit: 28,
    particles: {
        number: {
            value: 150,
            density: {
                enable: false,
            },
        },
        color: {
            value: "#4ecca3",
        },
        line_linked: {
            enable: true,
            distance: 5,
            opacity: 0.4,
        },
        move: {
            speed: 1,
        },
        opacity: {
            anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 5,
                sync: false,
            },
            value: 0.4,
        },
    },
    polygon: {
        enable: true,
        scale: 2,
        type: "inline",
        move: {
            type: "path",
        },
        url: svg,
        inline: {
            arrangement: "random-point",
        },
        draw: {
            enable: true,
            stroke: {
                color: "#4ecca3",
            },
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "bubble",
            },
        },
        modes: {
            bubble: {
                size: 3,
                distance: 40,
            },
        },
    },
};

export default function ParticlesComponent() {
    const clientWidth = window.innerWidth;
    const svgWidth = 636;
    if (params.polygon != null) {
        params.polygon.scale = (clientWidth / svgWidth) * 0.9;
    }

    return <Particles params={params} />;
}
