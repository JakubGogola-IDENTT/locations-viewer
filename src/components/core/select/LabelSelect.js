/* eslint-disable react/prop-types */
import { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { SelectField as Select } from '@livechat/design-system';
import { LABELS } from '../../../constants/labels';
import { Item } from './Item';

export const LabelSelect = ({
    id,
    className,
    assignments,
    selected,
    onSelect,
}) => {
    const items = useMemo(
        () => [
            {
                key: LABELS.ADDRESS,
                props: { name: 'Address', value: LABELS.ADDRESS },
            },
            {
                key: LABELS.CATEGORY,
                props: { name: 'Category', value: LABELS.CATEGORY },
            },
            { key: LABELS.CITY, props: { name: 'City', value: LABELS.CITY } },
            {
                key: LABELS.STATE,
                props: { name: 'State', value: LABELS.STATE },
            },
            { key: LABELS.ZIP, props: { name: 'Zip', value: LABELS.ZIP } },
        ],
        []
    );

    const selectedItems = useMemo(
        () => Object.values(assignments).filter(v => !!v),
        [assignments]
    );

    const handleSelect = useCallback(
        item => {
            if (selectedItems.includes(item)) {
                return;
            }

            onSelect(id, item);
        },
        [id, onSelect, selectedItems]
    );

    const getItemBody = useCallback(
        props => (
            <Item
                id={props.value}
                isSelected={selectedItems.includes(props.value)}
                name={props.name}
            />
        ),
        [selectedItems]
    );

    const getSelectedItemBody = useCallback(
        props => <Item id={props.value} name={props.name} />,
        []
    );

    return (
        <Select
            id={id}
            className={className}
            items={items}
            search={false}
            onItemSelect={handleSelect}
            getItemBody={getItemBody}
            getSelectedItemBody={getSelectedItemBody}
            selected={selected}
            placeholder="Select label"
        />
    );
};

LabelSelect.propTypes = {
    id: PropTypes.number.isRequired,
    className: PropTypes.string,
    selected: PropTypes.string,
    assignments: PropTypes.shape({}).isRequired,
    onSelect: PropTypes.func.isRequired,
};
