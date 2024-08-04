import { GetProps, Input } from 'antd';
import React from 'react';
type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
  console.log(info?.source, value);

export default function SearchBar({placeholder} : {placeholder: string}) {
  return (
    <Search
      placeholder={placeholder}
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      className="w-80"
    />
  );
}
