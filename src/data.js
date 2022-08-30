import info from "./information";

function DataFromFile() {
    console.log(info);
    return (
        <div>
            <h1>Hello</h1>
            <ul>
                {
                    info.map((value, index) => {
                        return <li key={index}>{value.name}</li>;
                    })
                }
            </ul>

        </div>
    );
}


export default DataFromFile;