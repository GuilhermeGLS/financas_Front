import { Header } from "../../components/Header"
import { Information } from "../../components/information"
import './styles.css'


export const Home = () => {
    return (
        <div className="container">
            <Header />
            <Information />
        </div>
    )
}