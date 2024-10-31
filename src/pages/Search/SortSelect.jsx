import Select from 'react-select';

import { SelectWrapper } from "./style";

const SortSelect = ({selectedSort, setSelectedSort, options}) => {
    const handleChange = (selectedSort) => {
        setSelectedSort(selectedSort)
    };

    return (
        <SelectWrapper>
            <Select
                placeholder="選擇排序"
                value={selectedSort}
                onChange={handleChange}
                options={options}
                styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: '14px',
                      minHeight: '34px',
                      height: '34px'
                    }),
                    option: (base) => ({
                        ...base,
                        fontSize: '14px',
                    }),
                }}
            />
        </SelectWrapper>
    );
}

export default SortSelect;