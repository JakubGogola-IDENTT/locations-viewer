import PropTypes from 'prop-types';
import { InputField } from '@livechat/design-system';

export const FileInput = ({ onChange }) => (
    <InputField
        id="fileInput"
        accept=".csv"
        type="file"
        placeholder="Choose CSV file to upload"
        onChange={onChange}
    />
);

FileInput.propTypes = {
    onChange: PropTypes.func.isRequired,
};
