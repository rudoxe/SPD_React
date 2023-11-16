import Quote from "./Quote.js";
import { useEffect, useState } from "react";

function QuoteList(){

    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function getQuotes(){
            const response = await fetch("https://dummyjson.com/quotes");
            const data = await response.json();
            console.log(data);
            setQuotes(data.quotes);
            setLoading(false);
        }
    
        getQuotes();
    }, []);

    const quotesJSX = quotes.map((quote) => (
        <Quote key={quote.id} name={quote.author} quote={quote.quote} />
    ));
    
    return(
        <>
            <h1>Quotes</h1>
            {loading ? "loading..." : quotesJSX }
        </>
    )
}


export default QuoteList;