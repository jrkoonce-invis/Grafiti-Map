import React from "react"
import axios from "axios";

// Components
import Card from '@mui/joy/Card';

const Data = () => {
    const [data, setData] = React.useState(null)

    const fetchData = () => {
        axios.get('http://127.0.0.1:5000/data',)
        .then(function (response) {
            setData(response.data)
            console.log(response.data)
        })
        .catch(function (error) {
            console.log("ERROR")
            console.log(error)
        })
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="block">
            <Card color="neutral" size="lg">
                <pre style={{textAlign: "left", backgroundColor: "rgba(252, 252, 254, 1)"}}>{JSON.stringify(data, null, 2)}</pre>
            </Card>
        </div>
    )
}

export default Data