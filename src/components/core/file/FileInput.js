import PropTypes from 'prop-types';
import { InputField } from '@livechat/design-system';

export const FileInput = ({ disabled, onChange }) => (
    <InputField
        id="fileInput"
        disabled={disabled}
        accept=".csv"
        type="file"
        placeholder="Choose CSV file to upload"
        onChange={onChange}
    />
);

FileInput.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};
