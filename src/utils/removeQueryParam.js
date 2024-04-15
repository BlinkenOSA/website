import {useRouter} from "next/router";

const removeQueryParam = (param) => {
    const router = useRouter()
    const { pathname, query } = router;
    const params = new URLSearchParams(query);
    params.delete(param);
    router.replace(
        { pathname, query: params.toString() },
        undefined,
        { shallow: true }
    );
};

export default removeQueryParam;