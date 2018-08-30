function userCard(aIndex) {
    function historyEntry(aMessage,aCredit) {
        return {
            operationType: aMessage,
            credits: aCredit,
            operationTime: new Date().toLocaleString()
        }
    }
    var cardOptions = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: aIndex
    }
    var card = {
        getCardOptions: function() {
            return cardOptions;
        },
        putCredits: function(aCredit) {
            cardOptions.balance = cardOptions.balance + aCredit;
            cardOptions.historyLogs.push(historyEntry('Resieved credits',aCredit));
        },
        takeCredits: function(aCredit) {
            if(cardOptions.balance > aCredit && cardOptions.transactionLimit > aCredit) {
                cardOptions.balance = cardOptions.balance - aCredit;
                cardOptions.historyLogs.push(historyEntry('Withdrawal of credit',aCredit));
                return true;
            }
            else {
                console.log('Transaction limit is reached or not enought money on balance');
                return false;
            }
        },
        setTransactionLimit: function(aTransactionLimit) {
            cardOptions.transactionLimit = aTransactionLimit;
            cardOptions.historyLogs.push(historyEntry('Transaction limit change',aTransactionLimit));
        },
        transferCredits: function(aCredit, aReciever) {
            if(this.takeCredits(aCredit)){
                aCredit = aCredit - (aCredit * 0.005);
                aReciever.putCredits(aCredit);
            }
        }
    }
    return card;
}

function userAccount(aName) {
    var user = {
        name: aName,
        cards: [],
        addCard: function() {
            if(this.cards.length < 3) {
                this.cards.push(userCard(this.cards.length + 1));
            }
            else {console.log('Card limits reached')};
        },
        getCardByKey: function(aIndex) {
            for(var i=0;i<this.cards.length;i++){
                if(aIndex === this.cards[i].getCardOptions().key){
                    return this.cards[i];       
                }
            }
        }
    };
    return user;
}

/*
var userCard1 = userCard(1);
var userCard3 = userCard(3);
//userCard1.putCredits(100);
//userCard1.takeCredits(50);
userCard1.setTransactionLimit(500);
userCard1.transferCredits(50,userCard3);
console.log(userCard1.getCardOptions());
console.log(userCard3.getCardOptions());
*/

/*
let user1 = userAccount('Bob');

user1.addCard()

user1.addCard()



let card1 = user1.getCardByKey(1);

let card2 = user1.getCardByKey(2);



card1.putCredits(500);

card1.setTransactionLimit(800);

card1.transferCredits(300, card2);



card2.takeCredits(50);



console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

*/
