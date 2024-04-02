import { Header } from "../../components/Header"
import { InfoTable } from "../../components/InfoTable"
import { InputsContainer } from "../../components/InputsContainer"
import { Information } from "../../components/information"
import './styles.css'


export const Home = () => {
    return (
        <div className="container">
            <Header />
            <Information />
            <InputsContainer />
            <InfoTable />
        </div>
    )
}