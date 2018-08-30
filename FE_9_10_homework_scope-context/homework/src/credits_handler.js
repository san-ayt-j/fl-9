function userCard(aIndex) {
    function historyEntry(aMessage,aCredit) {
        return {
            operationType: aMessage,
            credits: aCredit,
            operationTime: new Date().toLocaleString()
        }
    }
    let cardOptions = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: aIndex
    }
    let card = {
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
            } else {
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
                const transactionTaxes = 0.005;
                aCredit = aCredit - aCredit * transactionTaxes;
                aReciever.putCredits(aCredit);
            }
        }
    }
    return card;
}

function userAccount(aName) {
   let user = {
        name: aName,
        cards: [],
        addCard: function() {
            const maxCards = 3;
            if(this.cards.length < maxCards) {
                this.cards.push(userCard(this.cards.length + 1));
            } else {
                console.log('Card limits reached')
            }
        },
        getCardByKey: function(aIndex) {
            for(let i=0;i<this.cards.length;i++){
                if(aIndex === this.cards[i].getCardOptions().key){
                    return this.cards[i];       
                }
            }
        }
    };
    return user;
}