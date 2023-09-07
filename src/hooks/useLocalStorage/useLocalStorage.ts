import type { Dispatch, SetStateAction } from 'react';
import { useState, useMemo, useCallback, useEffect } from 'react';

export default function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
    const readValue = useMemo((): T => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? (parseJSON(item) as T) || initialValue : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return initialValue;
        }
    }, [initialValue, key]);

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue: Dispatch<SetStateAction<T>> = useCallback(
        (value) => {
            try {
                // Allow value to be a function so we have the same API as useState
                const newValue = value instanceof Function ? value(storedValue) : value;

                // Save to local storage
                window.localStorage.setItem(key, JSON.stringify(newValue));

                // Save state
                setStoredValue(newValue);
            } catch (error) {
                console.warn(`Error setting localStorage key “${key}”:`, error);
            }
        },
        [key, storedValue]
    );

    useEffect(() => {
        setValue(readValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [storedValue, setValue];
}

function parseJSON<T>(value: string | null): T | undefined {
    try {
        return value === 'undefined' ? undefined : JSON.parse(value ?? '');
    } catch {
        console.warn('parsing error on', { value });
        return undefined;
    }
}
