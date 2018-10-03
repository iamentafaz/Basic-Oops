console.log('Inside JS');
// let x = {value:10};
// let y = x;
// x.value = 30;

// let obj = { value: 10 };

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

// function Circle(radius) {
//     let defaultLocation = { x: 0, y: 0 };
//     let computedLocation = (factor) => {
//         //...
//         let x = defaultLocation.x;
//         let y = defaultLocation.y;
//         console.log('Inside Computed Location',x,y);
//     };
//     this.radius = radius,

    // this.getDefaultLocation = () => {
    //     return defaultLocation;
    // }

//     this.draw = function() {
//         computedLocation(0.1);
//         console.log('draw');
//     }

//     Object.defineProperty(this,'defaultLocation', {
//         get: function(){
//             return defaultLocation;
//         },
//         set: (value)=> {
//             defaultLocation = value;
//         }
//     });
// }

//const circle = new Circle(2);
// circle.location = {x:1};
// delete circle.location;

// for(key in circle) {
//     if(typeof circle[key] !== 'function')
//         console.log(key,circle[key]);
// }

// Abstraction

class NameCreator {
    constructor(name) {
        const list = document.createElement('li');
        list.textContent = name;
        document.querySelector('#names').appendChild(list);
    }
}

class NameGenerator {
    constructor() {
        this.names = ['Manab Mondal', 'Rupam','Mir','Arita','Sachin','IP'];
        this.from = 0;
        this.to = 1;
        const btn = document.querySelector('button');
        btn.addEventListener('click', ()=> {
            this.addName();
        });
    }
    addName () {
        console.log('add',this,names);
        for(let i=this.from;i<=this.to;i++) {
            const nameField = new NameCreator(this.names[i]);    
        }
        this.from = this.to + 1;
        this.to = this.to + 2;
        if(this.to >= this.names.length) {
            console.log('last');
            this.from = 0;
            this.to = 1;
        }
        // this.count++;
        // if(this.count >= this.names.length) {
        //     this.count = 0;
        // }
    }
}

const name = new NameGenerator();
