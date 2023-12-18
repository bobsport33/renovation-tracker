const BACKEND_ENV: string | undefined = process.env.NEXT_PUBLIC_BACKEND_ENV;

const apiUrl = (path: string): string => {
    if (BACKEND_ENV === "production") {
        return `https://renovation-estimator.netlify.app/api/${path}`;
    }

    return `http://localhost:3000/api/${path}`;
};

export default apiUrl;
