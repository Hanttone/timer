import styled from 'styled-components/macro';

export default function Button({
	width,
	height,
	text,
}) {
	function handleClick() {
		console.log('I am working');
	}

	return (
		<ButtonStyled
			onClick={handleClick}
			width={width}
			height={height}
		>
			{text}
		</ButtonStyled>
	);
}

const ButtonStyled = styled.button`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: 3%;
	padding: 3%;
	background-color: rgb(171, 207, 222);
	border: none;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3),
		inset 0px 5px 5px rgba(203, 233, 245, 0.5);
	color: rgb(171, 207, 222);
	font-size: 1.5rem;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;
