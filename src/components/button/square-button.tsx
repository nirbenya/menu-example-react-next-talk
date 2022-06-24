import styled from 'styled-components';
import Button from './button';
import styles from './styles';

const SquareButton = styled(Button)`
	width: ${props => styles.sizes[props.size || 'lg'].height};
	padding: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;




export default SquareButton;
