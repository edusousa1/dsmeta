import axios from "axios";
import icon from "../../assets/img/notification-icon.svg"
import { BASE_URL } from "../../utils/request";
import './styles.css'

type Props = {
    SaleId: number;

}
function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
        console.log("sucesso");
    })
}
function NotificationButton({ SaleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(SaleId)}>
            <img src={icon} alt="Notificar" />
        </div>)
}

export default NotificationButton
