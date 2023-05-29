import Stars from "./components/Stars"

function App() {
	return (
	<>
		<div className="card">
			<h2>Супермен</h2>	
			<Stars count={3} />
			<div className="btn">Купить $60</div>
		</div>		
		<div className="card">
			<h2>Одинокий странник</h2>
			<Stars count={4} />
			<div className="btn">Купить $50</div>
		</div>
		</>
	)
}

export default App