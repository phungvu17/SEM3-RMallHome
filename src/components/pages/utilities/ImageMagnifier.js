import React, { useRef, useEffect } from "react";
function MagnifierImage({ src, zoom }) {
    const imgRef = useRef(null);
    const glassRef = useRef(null);

    useEffect(() => {
        magnify();
    }, []);

    const magnify = () => {
        let img, glass, w, h, bw;
        img = imgRef.current;
        glass = glassRef.current;
        if (!glass) {
            glass = document.createElement("div");
            glass.setAttribute("class", "img-magnifier-glass");
            img.parentElement.insertBefore(glass, img);
        }
        glass.style.backgroundImage = `url('${src}')`;
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;

        const moveMagnifier = (e) => {
            var pos, x, y;
            e.preventDefault();
            pos = getCursorPos(e);
            x = pos.x;
            y = pos.y;
            if (x > img.width - w / zoom) {
                x = img.width - w / zoom;
            }
            if (x < w / zoom) {
                x = w / zoom;
            }
            if (y > img.height - h / zoom) {
                y = img.height - h / zoom;
            }
            if (y < h / zoom) {
                y = h / zoom;
            }
            glass.style.left = x - w + "px";
            glass.style.top = y - h + "px";
            glass.style.backgroundPosition = `-${x * zoom - w + bw}px -${y * zoom - h + bw}px`;
        };

        const getCursorPos = (e) => {
            var a,
                x = 0,
                y = 0;
            e = e || window.event;
            a = img.getBoundingClientRect();
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return { x: x, y: y };
        };
        glass.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("mousemove", moveMagnifier);

        glass.addEventListener("touchmove", moveMagnifier);
        img.addEventListener("touchmove", moveMagnifier);
    };

    return (
        <div className="img-magnifier-container">
            <img ref={imgRef} src={src} width="600" height="400" alt="Girl" />
            <div ref={glassRef} className="img-magnifier-glass"></div>
        </div>
    );
}

export default MagnifierImage;
