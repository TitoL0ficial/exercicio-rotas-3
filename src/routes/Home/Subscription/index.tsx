import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import PageCard from "../../../components/PageCard";

export default function Subscription() {
    return(
        <>
        <main>
            <section>
                <div className="container">
                    <div>
                        <PageCard title="Página de inscrição"/>
                    </div>
                    <div className="dflex">
                        <Link to="/promotion">
                            <Button text="Ver promoção"/>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}