function ISR({ predios }) {
    return (
        <div>
            <h1>Aprendendo NextJS - CSR</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Sigla</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        predios.map(obj => (
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.descricao}</td>
                                <td>{obj.sigla}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ISR;

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predios`);
    const predios = await res.json();

    return {
        props: {
            predios
        }, revalidate :30
    }
}