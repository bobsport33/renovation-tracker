const BACKEND_ENV = process.env.BACKEND_ENV;

const apiUrl = (path: string) => {

    if (BACKEND_ENV === "production") {
        return `https://renovation-estimator.netlify.app/api/${path}`;
    } else {
        return `http://localhost:3000/api/${path}`;
    }
};

export default apiUrl;
