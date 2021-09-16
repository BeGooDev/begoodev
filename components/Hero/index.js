import {useCallback, useEffect, useState} from "react";
import classNames from "classnames";

const slogans = [
    {text: "Développement d'applications de qualité!", class: "color-blueLight"},
    {text: "La passion du code!", class: "color-pink"},
    {text: "Le développement de vos projets de A à Z!", class: "color-greenWater    "},
    {text: "Pour mettre vos Idées en Application, et inversement!", class: "color-blueDark"},
    {text: "Un souci de performance? Je vous aide à booster vos apps.", class: "color-orange"},
]

export default function Hero() {
    const [newSlogan, setnewSlogan] = useState(slogans[0]);

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * slogans.length);
        setnewSlogan(slogans[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 5000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <div className={classNames("hero is-fullwidth is-medium has-text-white background-transition", newSlogan.class)}>
            <div className="hero-body has-text-centered">
                <img src="/img/logo_begoodev-white.png"/>
                <h4 className="mt-5 is-size-4-desktop">
                    {newSlogan.text}
                </h4>
            </div>
        </div>
    );

}
