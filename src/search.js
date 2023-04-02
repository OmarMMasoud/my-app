import React, { useState } from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
const search = (OnSearchChange) => {

    const [search,setSearch] = useState(null);
    const handleOnChange = (SearchData) => {
        setSearch(SearchData);
        OnSearchChange(SearchData);

    }

    return (
        <AsyncPaginate
        placeholder ="search for a city"
        debounceTimeout={600}
        value= {search}
        onChange={handleOnChange}

        />
        )
}

export default search;