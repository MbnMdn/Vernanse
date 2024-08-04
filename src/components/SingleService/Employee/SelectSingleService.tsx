import { Select } from 'antd';
import React from 'react';

export default function SelectSingleService({ user_role }: { user_role: string }) {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  return (
    <Select
      showSearch
      className="w-full"
      placeholder="Order Type"
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      options={
        user_role === 'designer'
          ? [
              {
                value: 'measure',
                label: 'Measure',
              },
              {
                value: 'produce',
                label: 'Produce',
              },
              {
                value: 'install',
                label: 'Install',
              },
            ]
          : user_role === 'producer'
          ? [
              {
                value: 'measure',
                label: 'Measure',
              },
              {
                value: 'design',
                label: 'Design',
              },
              {
                value: 'install',
                label: 'Install',
              },
            ]
          : user_role === 'installer'
          ? [
              {
                value: 'measure',
                label: 'Measure',
              },
              {
                value: 'produce',
                label: 'Produce',
              },
              {
                value: 'design',
                label: 'Design',
              },
            ]
          : [
              {
                value: 'design',
                label: 'Design',
              },
              {
                value: 'produce',
                label: 'Produce',
              },
              {
                value: 'install',
                label: 'Install',
              },
            ]
      }
    />
  );
}
