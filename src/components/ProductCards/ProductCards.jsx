import React from "react";
import "../../scss/components/productCards.scss";
import arrow from "../../images/icons/arrow-icon.svg";

function ProductCards() {

    return (
        <section className="product-cards">
            <h2 className="product-cards__title">наши продукты</h2>

            <div className="product-cards__container">

                <div className="product-cards__card-wide">
                    <img src={arrow} className="product-cards__icon" alt="иконка стрелки" />
                    <h3 className="product-cards__card-title">кредиты</h3>
                    <p className="product-cards__card-text">удобный расчет на калькуляторе
                        и оформление онлайн</p>
                </div>

                <div className="product-cards__card-slim">
                    <img src={arrow} className="product-cards__icon" alt="иконка стрелки" />
                    <h3 className="product-cards__card-title">кредитные карты</h3>
                    <p className="product-cards__card-text">одходит
                        для повседневных трат и покупок в рассрочку</p>
                </div>

                <div className="product-cards__card-slim">
                    <img src={arrow} className="product-cards__icon" alt="иконка стрелки" />
                    <h3 className="product-cards__card-title">дебетовые карты</h3>
                    <p className="product-cards__card-text">кэшбэк рублями до 30%, переводы без комиссии</p>
                </div>

                <div className="product-cards__card-wide">
                    <img src={arrow} className="product-cards__icon" alt="иконка стрелки" />
                    <h3 className="product-cards__card-title">вклады</h3>
                    <p className="product-cards__card-text">откройте вклад с пополнением, каждый месяц 
                        получайте проценты на карту или вклад</p>
                </div>

            </div>
        </section>
    );
}

export default ProductCards;
