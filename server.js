// sk_test_51LnUKJDM1jwCEz8OJG69szv032rIo4X0WrFMaXrqxu9g8fdohsL1y54JEUhFUKrqoBquVjN3AzpIFyrbN915bgcd00O5hqoGCJ
// pink heels: price_1LnUTFDM1jwCEz8OGoOSXiSM
// red heels: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// puffy heels: price_1LnUUoDM1jwCEz8OvxIcJ7to
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51LnUKJDM1jwCEz8OJG69szv032rIo4X0WrFMaXrqxu9g8fdohsL1y54JEUhFUKrqoBquVjN3AzpIFyrbN915bgcd00O5hqoGCJ');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

//post req to checkout 
app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});
const port = 4000
app.listen(port, () => console.log(`Listening on port ${port}!`));