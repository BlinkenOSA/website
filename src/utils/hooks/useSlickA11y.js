import {useEffect} from "react";

const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button',
    'input',
    'select',
    'textarea',
    '[tabindex]'
].join(', ');

const updateHiddenSlideFocusability = (container) => {
    const slides = container.querySelectorAll('.slick-slide');

    slides.forEach((slide) => {
        const isHidden = slide.getAttribute('aria-hidden') === 'true';
        const focusableElements = slide.querySelectorAll(FOCUSABLE_SELECTOR);

        if (isHidden) {
            if (!slide.hasAttribute('inert')) {
                slide.setAttribute('inert', '');
            }
        } else {
            if (slide.hasAttribute('inert')) {
                slide.removeAttribute('inert');
            }
        }

        focusableElements.forEach((element) => {
            if (!Object.prototype.hasOwnProperty.call(element.dataset, 'slickA11yOriginalTabindex')) {
                element.dataset.slickA11yOriginalTabindex = element.getAttribute('tabindex') ?? '';
            }

            if (isHidden) {
                if (element.getAttribute('tabindex') !== '-1') {
                    element.setAttribute('tabindex', '-1');
                }
            } else {
                const originalTabindex = element.dataset.slickA11yOriginalTabindex;

                if (originalTabindex === '') {
                    if (element.hasAttribute('tabindex')) {
                        element.removeAttribute('tabindex');
                    }
                } else {
                    if (element.getAttribute('tabindex') !== originalTabindex) {
                        element.setAttribute('tabindex', originalTabindex);
                    }
                }
            }
        });
    });
};

const useSlickA11y = (containerRef, dependencies = []) => {
    useEffect(() => {
        const container = containerRef.current;
        let animationFrameId = null;

        if (!container) {
            return;
        }

        const scheduleUpdate = () => {
            if (animationFrameId !== null) {
                return;
            }

            animationFrameId = window.requestAnimationFrame(() => {
                animationFrameId = null;
                updateHiddenSlideFocusability(container);
            });
        };

        updateHiddenSlideFocusability(container);

        const observer = new MutationObserver((mutations) => {
            const shouldUpdate = mutations.some((mutation) => {
                if (mutation.type === 'childList') {
                    return true;
                }

                return mutation.type === 'attributes' && mutation.attributeName === 'aria-hidden';
            });

            if (shouldUpdate) {
                scheduleUpdate();
            }
        });

        observer.observe(container, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ['aria-hidden']
        });

        return () => {
            observer.disconnect();

            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, dependencies);
};

export default useSlickA11y;
