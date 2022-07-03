let Manojcoin = new Blockchain();
console.log("Mining is in progress!!!!!!!");


Manojcoin.Add_New_Block(
    new Block(1, "06.06.2022", {
        sender: "Manoj",
        recipient: "Sunil",
        quantity: 5
    })
);

Manojcoin.Add_New_Block(
    new Block(2, "08.06.2022", {
        sender: "Sunil",
        recipient: "Kiran",
        quantity: 10
    })
);
console.log(JSON.stringify(Manojcoin, null, 4));