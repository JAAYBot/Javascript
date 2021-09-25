

class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    // _  === private function, not Actually private but convention
    _hash(key){
        let hash = 0;
        for(let i = 0; i<key.length;i++){
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
            //console.log("i: ", i, "  hash: ", hash);
        }
        return hash;
    }

    set(key, value){
        console.log("key: ", key, " value: ", value);
        let position = this._hash(key);
        if(!this.data[position]){
            this.data[position] = [];
        }
                  
        this.data[position].push([key, value]);
        return this.data;
    }

    get(key){
        let position = this._hash(key);
        const currentBucket = this.data[position];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }

    key(){
        const keysArray = [];

        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                for(let j = 0; j < this.data[i].length; j++){
                    keysArray.push(this.data[i][j][0]);
                }
            }
        }
        return keysArray;
    }

}

const myHashTable = new HashTable(5);

console.log(myHashTable.set('apples', 100));
console.log(myHashTable.set('grapes', 200));
console.log(myHashTable.set('bananas', 300));
console.log(myHashTable.set('oranges', 400));
console.log(myHashTable.set('pears', 500));
console.log(myHashTable.set('kiwis', 600));

console.log(myHashTable.get('pears'));
console.log(myHashTable.get('bananas'));

console.log(myHashTable.key());
