import { useState} from 'react';

function useLocalStorage(key, initialValue) {
    // Функция для получения значения из localStorage
    const getStorageValue = () => {
        try {
            const item = localStorage.getItem(key);
            
            // Если элемент не найден, возвращаем initialValue
            if (item === null) {
                return initialValue;
            }
            
            // Пытаемся распарсить JSON
            try {
                return JSON.parse(item);
            } catch (parseError) {
                // Если не удалось распарсить, возвращаем само значение
                return item;
            }
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState(getStorageValue);

    // Функция для обновления значения
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue];
}

export default useLocalStorage;