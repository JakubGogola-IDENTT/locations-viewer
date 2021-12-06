import { Toast as Component } from '@livechat/design-system';
import PropTypes from 'prop-types';
import { TOAST_VARIANTS } from '../../../constants/toastVariants';

export const Toast = ({ children, variant, onClose }) => (
    <Component removable variant={variant} onClose={onClose}>
        {children}
    </Component>
);

Toast.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(TOAST_VARIANTS.getAll()).isRequired,
    onClose: PropTypes.func.isRequired,
};
