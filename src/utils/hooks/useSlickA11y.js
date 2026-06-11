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
            slide.setAttribute('inert', '');
        } else {
            slide.removeAttribute('inert');
        }

        focusableElements.forEach((element) => {
            if (!Object.prototype.hasOwnProperty.call(element.dataset, 'slickA11yOriginalTabindex')) {
                element.dataset.slickA11yOriginalTabindex = element.getAttribute('tabindex') ?? '';
            }

            if (isHidden) {
                element.setAttribute('tabindex', '-1');
            } else {
                const originalTabindex = element.dataset.slickA11yOriginalTabindex;

                if (originalTabindex === '') {
                    element.removeAttribute('tabindex');
                } else {
                    element.setAttribute('tabindex', originalTabindex);
                }
            }
        });
    });
};

const useSlickA11y = (containerRef, dependencies = []) => {
    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        updateHiddenSlideFocusability(container);

        const observer = new MutationObserver(() => {
            updateHiddenSlideFocusability(container);
        });

        observer.observe(container, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ['aria-hidden', 'class', 'tabindex']
        });

        return () => observer.disconnect();
    }, dependencies);
};

export default useSlickA11y;
