import {useRouter} from "next/router";

export const getFullURL = (locale) => {
    const {asPath} = useRouter();
    return locale === 'hu' ? `https://www.archivum.org/hu${asPath}` : `https://www.archivum.org${asPath}`
}