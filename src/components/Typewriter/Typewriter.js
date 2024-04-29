import { motion } from "framer-motion";

const Typewriter = ({ text, delay=0, ...rest }) => {
    const sentenceVariants = {
        hidden: {},
        // change staggerChildren variable to speed up or slow down typing.
        visible: { opacity: 1, transition: { staggerChildren: 0.05, delay: delay } }
    };

    const letterVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { opacity: { duration: 0, delay: delay } } }
    };

    return (
        <motion.p
            key={text}
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            {...rest}
            style={{margin: 0}}
        >
            {text.split("").map((char, i) => (
                <motion.span key={`${char}-${i}`} variants={letterVariants}>
                    {char}
                </motion.span>
            ))}
        </motion.p>
    )
};

export default Typewriter;