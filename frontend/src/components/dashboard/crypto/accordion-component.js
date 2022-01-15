import React, { useEffect, Fragment } from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
 
const AccordionComponent = () =>{
 
    useEffect(() => {
        document.querySelector(".accordion .accordion-item").classList.add("active");

        return () => {
            document.querySelector(".accordion .accordion-item").classList.remove("active");
        }
    },[]);
 
        const DummyContent1 = () => (
            <div className="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                <div className="media-accordion">
                    <div className="media">
                        <div>
                            <h6>{"BTC/USD"}</h6>
                            <p>{"24h Change"}</p>
                            <p>{"24h Volume"}</p>
                        </div>
                        <div className="media-body text-right">
                            <p>{"11916.9"}</p>
                            <p className="font-primary">{"283.1 USD (+2.33%)"}</p>
                            <p className="font-secondary">{"1029.1906 BTC"}</p>
                        </div>
                    </div>
                    <div className="media">
                        <div>
                            <h6>{"BTC/EUR"}</h6>
                            <p>{"24h Change"}</p>
                            <p>{"24h Volume"}</p>
                        </div>
                        <div className="media-body text-right">
                            <p>{"9213.9"}</p>
                            <p className="font-primary">{"200.1 EUR (+2.33%)"}</p>
                            <p className="font-secondary">{"1599.1906 BTC"}</p>
                        </div>
                    </div>
                    <div className="media">
                        <div>
                            <h6>{"BTC/GBP"}</h6>
                            <p>{"24h Change"}</p>
                            <p>{"24h Volume"}</p>
                        </div>
                        <div className="media-body text-right">
                            <p>{"1459.9"}</p>
                            <p className="font-primary">{"-283.1 USD (-2.33%)"}</p>
                            <p className="font-secondary">{"350.1906 BTC"}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
        const DummyContent2 = () => (
            <div className="collapse show" id="collapseicon1" aria-labelledby="collapseicon1" data-parent="#accordionoc">
                <div className="media-accordion">
                    <div className="media">
                        <div>
                            <h6>{"BTC/USD"}</h6>
                            <p>{"24h Change"}</p>
                            <p>{"24h Volume"}</p>
                        </div>
                        <div className="media-body text-right">
                            <p>{"11916.9"}</p>
                            <p className="font-primary">{"283.1 USD (+2.33%)"}</p>
                            <p className="font-secondary">{"1029.1906 BTC"}</p>
                        </div>
                    </div>
                    <div className="media">
                        <div>
                            <h6>{"BTC/EUR"}</h6>
                            <p>{"24h Change"}</p>
                            <p>{"24h Volume"}</p>
                        </div>
                        <div className="media-body text-right">
                            <p>{"9213.9"}</p>
                            <p className="font-primary">{"200.1 EUR (+2.33%)"}</p>
                            <p className="font-secondary">{"1599.1906 BTC"}</p>
                        </div>
                    </div>
                    <div className="media">
                        <div>
                            <h6>{"BTC/GBP"}</h6>
                            <p>{"24h Change"}</p>
                            <p>{"24h Volume"}</p>
                        </div>
                        <div className="media-body text-right">
                            <p>{"1459.9"}</p>
                            <p className="font-primary">{"-283.1 USD (-2.33%)"}</p>
                            <p className="font-secondary">{"350.1906 BTC"}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
        const DummyContent3 = () => (
            <div className="collapse show" id="collapseicon2" data-parent="#accordionoc">
 
                <div className="media-accordion">
                    <div className="media">
                        <div>
                            <h6>{"BTC/USD"}</h6>
                            <p>{"24h Change"}</p>
                            <p>{"24h Volume"}</p>
                        </div>
                        <div className="media-body text-right">
                            <p>{"11916.9"}</p>
                            <p className="font-primary">{"283.1 USD (+2.33%)"}</p>
                            <p className="font-secondary">{"1029.1906 BTC"}</p>
                        </div>
                    </div>
                    <div className="media">
                        <div>
                            <h6>{"BTC/EUR"}</h6>
                            <p>{"24h Change"}</p>
                            <p>{"24h Volume"}</p>
                        </div>
                        <div className="media-body text-right">
                            <p>{"9213.9"}</p>
                            <p className="font-primary">{"200.1 EUR (+2.33%)"}</p>
                            <p className="font-secondary">{"1599.1906 BTC"}</p>
                        </div>
                    </div>
                    <div className="media">
                        <div>
                            <h6>{"BTC/GBP"}</h6>
                            <p>{"24h Change"}</p>
                            <p>{"24h Volume"}</p>
                        </div>
                        <div className="media-body text-right">
                            <p>{"1459.9"}</p>
                            <p className="font-primary">{"-283.1 USD (-2.33%)"}</p>
                            <p className="font-secondary">{"350.1906 BTC"}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <Fragment>
                <div className="card crypto-accordion">
                    <Accordion atomic={true}>
                        <AccordionItem className="card-header bg-primary" title="BTC">
                            <DummyContent1 />
                        </AccordionItem>
                        <AccordionItem className="card-header bg-primary" title="ETH">
                            <DummyContent2 />
                        </AccordionItem>
                        <AccordionItem className="card-header bg-primary" title="DASH">
                            <DummyContent3 />
                        </AccordionItem>
                    </Accordion>
                </div>
 
            </Fragment>
        );
    
}
 
export default AccordionComponent;
