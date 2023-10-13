import React from 'react';
import { fetchSearch } from '../../../../../api/search/search';

export async function SearchList(props: { value: any }) {
    const items = await fetchSearch();
    return (
        <div>
            {items.map((user: any) => (
                <>
                    <p key={user.id_search}>{user.name_search}</p>
                    <br />
                </>
            ))}
        </div>
    );
}
