import { useEffect, useState } from "react"


function App() {
	const [serverMessage, setServerMessage] = useState("")

	useEffect(() => {
		const getData = async () => {
			try {
				console.log("Fetching data")
				const response = await fetch("/api")
				const json = await response.json()
				console.log("json \t", json)

				setServerMessage(json.data)
			} catch (err) {
				throw new Error(`${err}`)
			}
		}
		getData()
	}, [])

	return (
		<>
			<h3>aServer response: `{serverMessage}`</h3>
			<h1>hello this is basic react</h1>
		</>
	)
}

export default App
