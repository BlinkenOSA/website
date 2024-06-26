import { createMedia } from "@artsy/fresnel"

const AppMedia = createMedia({
    breakpoints: {
        xs: 0,
        sm: 700,
        md: 1200
    },
})

// Make styles for injection into the header of the page
export const mediaStyles = AppMedia.createMediaStyle()

export const { Media, MediaContextProvider } = AppMedia
