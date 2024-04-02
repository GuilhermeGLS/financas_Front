import { Header } from "../../components/Header"
import { InputsContainer } from "../../components/InputsContainer"
import { Information } from "../../components/information"
import './styles.css'


export const Home = () => {
    return (
        <div className="container">
            <Header />
            <Information />
            <InputsContainer />
        </div>
    )
}