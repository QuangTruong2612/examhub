import React, { useEffect, useState } from 'react';

import { DIV_SEARCH, SEARCHITEM, SEARCHLIST } from '../../../../../styles/component/header/header-style';
import callApi from '../../../../../utils/callApi';
import Link from 'next/link';

function useDebounce(value: any, duration: number = 1000) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, duration);
        return () => {
            clearTimeout(timer);
        };
    }, [duration, value]);
    return debounceValue;
}

export function SearchList(props: { value: any; visible: any }) {
    const [items, setItems] = useState([]);
    const debounce = useDebounce(props.value);
    useEffect(() => {
        if (!debounce.trim()) {
            return;
        }
        callApi(null, debounce, 'GET', 'https://jsonplaceholder.typicode.com/todos')
            .then((res) => setItems(res.data))
            .catch(() => console.log('error'));
    }, [debounce]);

    return (
        <>
            {props.value.length > 0 && props.visible == true ? (
                <DIV_SEARCH>
                    <SEARCHLIST>
                        {items.map((item) => (
                            <Link key={item['id']} href={''}>
                                <SEARCHITEM key={item['id']}>{item['title']}</SEARCHITEM>
                            </Link>
                        ))}
                    </SEARCHLIST>
                </DIV_SEARCH>
            ) : (
                ''
            )}
        </>
    );
}
