import {useEffect, useState} from 'react';

const localCache = {}

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
        getFetch();
    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
    }

    const getFetch = async () => {

        //await new Promise(resolve => setTimeout(resolve, 2000))

        //handle caching
        if (localCache[url]) {
            console.log('Using cached data for:', url);
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            })
            return
        }

        setLoadingState(); // Reset state to loading before fetching new data

        const response = await fetch(url)

        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText,
                },
            })
            return;
        }

        const data = await response.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        });


        //handle the data as needed cache
        localCache[url] = data;
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
};

