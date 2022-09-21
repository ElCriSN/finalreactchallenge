import { useState, useEffect } from 'react';
const MiApi = () => {
    const [info, setInfo] = useState([]);
    const [buscarFeriado, setBuscarFeriado] = useState("")

    const handleSearch = (e) => {
        setBuscarFeriado(e.target.value)
    }

    useEffect(() => {
        consultarInformacion();
    }, []);

    const consultarInformacion = async () => {
        const url = "https://api.victorsanmartin.com/feriados/en.json"
        const response = await fetch(url)
        const data = await response.json()
        setInfo(data.data);
    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <h1 className="navbar-brand text-white">Buscar Feriado =D!!</h1>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            placeholder="Buscar"
                            onChange={handleSearch}
                            type="search"
                            aria-label="Search"
                        />
                    </form>
                </div>
            </nav>
            <section className="mt-5 mx-3">
                <h2>Listado de Feriados en Chile:</h2>
                <ul>
                    {info.filter((feriado) => {
                        return (
                            feriado.date.includes(buscarFeriado))
                    }).map((feriado) => {
                        return (
                            <li key={feriado.date}>
                                {feriado.date} - {feriado.title} - {feriado.type}
                            </li>)
                    })}
                </ul>
            </section>

        </div>

    )
}

export default MiApi;