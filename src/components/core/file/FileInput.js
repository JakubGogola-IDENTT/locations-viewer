import PropTypes from 'prop-types';
import { InputField } from '@livechat/design-system';

export const FileInput = ({ className, disabled, onChange }) => (
    <InputField
        id="fileInput"
        className={className}
        disabled={disabled}
        accept=".csv"
        type="file"
        placeholder="Choose CSV file to upload"
        onChange={onChange}
    />
);

FileInput.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};
