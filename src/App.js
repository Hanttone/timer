import GlobalStyle from './Services/GlobalStyle';
import styled from 'styled-components/macro';
import Button from './Components/Button';

function App() {
	return (
		<AppWrapper>
			<GlobalStyle />
			<section>
				<Button
					text='Start'
					width='20%'
					height='9%'
				/>
				<Button
					text='Pause'
					width='20%'
					height='9%'
				/>
				<Button
					text='Stop'
					width='20%'
					height='9%'
				/>
				<Button
					text='Reset'
					width='20%'
					height='9%'
				/>
			</section>
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgb(171, 207, 222);

	section {
		display: flex;
		width: 50%;
		margin-left: 25%;
		height: 100vh;
		justify-content: center;
		align-items: center;
	}
`;
