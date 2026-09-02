import React from "react";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

const getTextFromBlockNodes = (nodes = []) => {
    return nodes.map((node) => {
        if (!node) {
            return "";
        }

        if (node.type === "text") {
            return node.text || "";
        }

        if (Array.isArray(node.children)) {
            return getTextFromBlockNodes(node.children);
        }

        return "";
    }).join("");
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

const addHeadingAnchors = (nodes = []) => {
    return nodes.map((node) => {
        if (!node || typeof node !== "object") {
            return node;
        }

        const nextNode = {
            ...node
        };

        if (Array.isArray(node.children)) {
            nextNode.children = addHeadingAnchors(node.children);
        }

        if (node.type === "heading" && node.level === 4) {
            nextNode.anchorId = createAnchorId(getTextFromBlockNodes(node.children));
        }

        return nextNode;
    });
};

const blocks = {
    heading: ({level, children, anchorId}) => {
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
    const normalizedContent = addHeadingAnchors(content);

    return <BlocksRenderer content={normalizedContent} blocks={blocks} />;
};

export default BlocksContentRenderer;
