import React, { forwardRef } from 'react';
import { } from 'react-dom';
import './buttons.css'
import { useSpring, config, animated } from 'react-spring'

export const ButtonPopRightLite = forwardRef(({ breath, grow, children, expand, title }, ref) => {
    const [round, setRound] = useSpring(() => ({ round1: "50%", round2: "50%", widthfont: "90%", xfront: "5%" }))
    const [rest, setRest] = useSpring(() => ({ widthfont: "90%", xfront: "5%" }))
    const [pusher, setPusher] = useSpring(() => ({ width: `${breath}%`, height: "100%" }))
    const [textDes, setTextDes] = useSpring(() => ({ flexGrow: 0, opacity: 0 }))


    const pop = () => {

        setRest({ widthfont: "100%", xfront: "0%" })
        setRound({ round1: "15%", config: { duration: 90 } })
        setPusher({ width: `${breath * grow}%` })
        setTextDes({ flexGrow: grow - 1, opacity: 1 })
    }

    const shrink = () => {

        setRest({ widthfont: "90%", xfront: "5%" })
        setRound({ round1: "50%", config: { duration: 800 } })
        setPusher({ width: `${breath}%` })
        setTextDes({ flexGrow: 0, opacity: 0 })
    }

    expand ? pop() : shrink()
    return (
        <>
            <animated.div className="liteWrapper" style={pusher}>

                <animated.div className="ten" style={{ width: "100%", height: "100%" }}>

                    <svg
                        width="100%"
                        height="100%"
                        className="tenSVG"
                    >
                        <defs>
                            <filter
                                id="filter973"
                                width="10.278"
                                height="10.306"
                                x="-0.139"
                                y="-0.153"
                                colorInterpolationFilters="sRGB"
                            >
                                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                            </filter>
                        </defs>
                        <animated.rect className="back"
                            style={{ mixBlendMode: "normal" }}
                            width="100%"
                            height="100%"
                            fill="#000"
                            fillOpacity="0.214"
                            filter="url(#filter973)"
                            opacity="0.6"
                            rx={round.round1}
                            ry={round.round2}
                        ></animated.rect>
                        <animated.rect className="font"
                            x={rest.xfront}
                            y="5%"
                            width={rest.widthfont}
                            height="90%"
                            fill="#fff"
                            rx={round.round1}
                            ry={round.round2}
                        ></animated.rect>

                    </svg>

                </animated.div>
                <div className="infoWrapper">
                    <div className="svgHolder">
                        {children}
                    </div>
                    <animated.div className="textHolder" style={textDes}>
                        {title}
                    </animated.div>
                </div>
                <animated.div className="eventDetector2" ref={ref}></animated.div>
            </animated.div>
        </>

    );
});






// export const ButtonPopRight = forwardRef(({ grow, contract, children }, ref) => {
//     const [textWidth, setTextWidth] = useSpring(() => ({ width: "0vw", opacity: 0, fontSize: `${grow.fontSize}vw` }))
//     const [tranformWidth, setTranformWidth] = useSpring(() => ({ width: "12.131" }))
//     const [tranformBackWidth, setTranformBackWidth] = useSpring(() => ({ width: "13.173" }))
//     const [tranformX, setTranformX] = useSpring(() => ({ x: "56.383" }))
//     const [tranformBackX, setTranformBackX] = useSpring(() => ({ x: "55.877" }))
//     const [tranformWrapper, setTranformWrapper] = useSpring(() => ({ width: `${grow.radius}vw`, height: `${grow.radius}vw`, minWidth: grow.min, minHeight: grow.min }))
//     const [tranformSVG, setTranformSVG] = useSpring(() => ({ width: "100%", height: "100%" }))

//     const shrink = () => {
//         setTranformX({ x: "56.383", delay: 50 })
//         setTranformBackX({ x: "55.877", delay: 50 })
//         setTranformWidth({ width: "12.131" })
//         setTranformBackWidth({ width: "13.173" })
//         setTranformSVG({ width: "100%", height: "100%", delay: 50 })
//         setTranformWrapper({ width: `${grow.radius}vw`, height: `${grow.radius}vw`, minWidth: grow.min, minHeight: grow.min, delay: 300 })
//         setTextWidth({ width: "0vw", opacity: 0, fontSize: `${grow.fontSize}vw` })
//     }

//     const expand = () => {
//         setTranformX({ x: `${grow.transRect}`, delay: 30 })
//         setTranformBackX({ x: `${grow.transRect}`, delay: 30 })
//         setTranformWidth({ width: `${grow.front}`, delay: 30 })
//         setTranformBackWidth({ width: `${grow.front}`, delay: 30 })
//         setTranformSVG({ width: `${grow.SVG}%  `, height: "100%" })
//         setTranformWrapper({ width: `${grow.grow}vw`, height: `${grow.radius}vw`, minWidth: grow.min, minHeight: grow.min })
//         setTextWidth({ width: `${grow.textWidth}vw`, opacity: 1, fontSize: `${grow.fontSize}vw`, delay: 200 })
//     }

//     contract ? shrink() : expand()
//     try {
//         return (
//             <animated.div className="buttonWrapper" style={tranformWrapper}>
//                 <animated.svg
//                     className="buttonSVG"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={tranformSVG.width}
//                     height={tranformSVG.height}

//                     version="1.1"
//                     viewBox="0 0 16.835 15.632"
//                 >
//                     <defs>
//                         <filter
//                             id="filter973"
//                             width="1.278"
//                             height="1.306"
//                             x="-0.139"
//                             y="-0.153"
//                             colorInterpolationFilters="sRGB"
//                         >
//                             <feGaussianBlur stdDeviation="0.763"></feGaussianBlur>
//                         </filter>
//                     </defs>
//                     <g
//                         fillOpacity="1"
//                         strokeWidth="0.008"
//                         transform="translate(-54.046 -143.913)"
//                     >
//                         <animated.rect
//                             style={{ mixBlendMode: "normal" }}
//                             width={tranformBackWidth.width}
//                             height="11.97"
//                             x={tranformBackX.x}
//                             y="145.744"
//                             fill="#000"
//                             fillOpacity="0.214"
//                             filter="url(#filter973)"
//                             opacity="0.799"
//                             rx="5.476"
//                             ry="5.985"
//                         ></animated.rect>
//                         <animated.rect
//                             width={tranformWidth.width}
//                             height="11.331"
//                             x={tranformX.x}
//                             y="146.041"
//                             fill="#fff"
//                             rx="6.065"
//                             ry="5.666"
//                         ></animated.rect>
//                     </g>
//                 </animated.svg>
//                 <div style={{ width: `${grow.radius}vw`, height: `${grow.radius}vw`, minWidth: grow.min, minHeight: grow.min }} className="SVGcontainer">
//                     <animated.div style={textWidth} className="Text">{grow.text}</animated.div>
//                     {children}
//                 </div>
//                 <div className="eventDetector" ref={ref}></div>
//             </animated.div>

//         );
//     } catch {
//         return (
//             console.log("A Button should look like this and also have the same attributes <ButtonPopRight ontract={contract} grow={{radius:4, SVG:6, front:20, transRect:52,textWidth:4,fontSize:1, text:\"lets See\"}}><div className=\"child\"></div></ButtonPopRight>")
//         )
//     }
// });

