import { useRouter } from 'next/router';

function handleClick(url) {
    const router = useRouter();
    router.push(url);
}

export default handleClick