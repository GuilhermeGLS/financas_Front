import './styles.css'


export const InputsContainer = () => {
    return(
        // Section para adicionar
        <section className='inputs-container'>
            {/* Div da data */}
            <div className='container-input'>
                <label htmlFor="data">Data</label>
                <input type="date" />
            </div>

            {/* Div de categoria (por select) */}
            <div className='container-input'>
            <label htmlFor="category">Data</label>
            <select name="category" id="category">
                <option value="Ganho">Ganho</option>
                <option value="Dispesas">Dispesas</option>
            </select>
            </div>

            {/*  */}
            <div className='container-input'>
                <label htmlFor="title">Título</label>
                <input type="text" />
            </div>

            {/*  */}
            <div className='container-input'>
                <label htmlFor="value">Valor</label>
                <input type="number" />
            </div>

            {/* Botão de adicionar */}
            <div className='container-input'>
                <button>Adicionar</button>
            </div>

        </section>
    )
}