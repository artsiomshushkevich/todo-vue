export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    const token = localStorage.getItem('token');

    const authError: Error & { status: number } = {
        ...new Error('not authenticated'),
        status: 401
    };

    if (!token) {
        throw authError;
    }

    const headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`
    };

    const response = await fetch(url, {
        ...options,
        headers
    });

    if (response.status === 401) {
        throw authError;
    }

    return response;
};
