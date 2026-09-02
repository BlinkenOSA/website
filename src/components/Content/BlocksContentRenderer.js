import React, {useEffect, useRef} from "react";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

const getNodeText = (node) => {
    if (typeof node === "string" || typeof node === "number") {
        return String(node);
    }

    if (Array.isArray(node)) {
        return node.map(getNodeText).join("");
    }

    if (React.isValidElement(node)) {
        return getNodeText(node.props.children);
    }

    return "";
};

const createAnchorId = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
};

const blocks = {
    heading: ({level, children}) => {
        if (level !== 4) {
            switch (level) {
                case 1:
                    return <h1>{children}</h1>;
                case 2:
                    return <h2>{children}</h2>;
                case 3:
                    return <h3>{children}</h3>;
                case 5:
                    return <h5>{children}</h5>;
                case 6:
                    return <h6>{children}</h6>;
                default:
                    return <h4>{children}</h4>;
            }
        }

        const anchorId = createAnchorId(getNodeText(children));

        if (!anchorId) {
            return <h4>{children}</h4>;
        }

        return (
            <h4 id={anchorId}>
                <a href={`#${anchorId}`}>{children}</a>
            </h4>
        );
    }
};

const BlocksContentRenderer = ({content}) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (!contentRef.current) {
            return;
        }

        const headings = contentRef.current.querySelectorAll("h4");

        headings.forEach((heading) => {
            const anchorId = createAnchorId(heading.textContent || "");

            if (!anchorId) {
                return;
            }

            heading.id = anchorId;

            const existingAnchor = heading.querySelector(`:scope > a[href="#${anchorId}"]`) || heading.querySelector(":scope > a");

            if (existingAnchor) {
                existingAnchor.setAttribute("href", `#${anchorId}`);
                return;
            }

            const anchor = document.createElement("a");
            anchor.setAttribute("href", `#${anchorId}`);

            while (heading.firstChild) {
                anchor.appendChild(heading.firstChild);
            }

            heading.appendChild(anchor);
        });
    }, [content]);

    return (
        <div ref={contentRef}>
            <BlocksRenderer content={content} blocks={blocks} />
        </div>
    );
};

export default BlocksContentRenderer;
