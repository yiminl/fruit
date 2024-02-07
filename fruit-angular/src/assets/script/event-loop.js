async function evnetLoop1() {
    console.log('7');
    const r2 = await evnetLoop2();
    console.log('10');
    return 'fn1';
}

async function evnetLoop2() {
    console.log('8');
    //return 'fn2';
}

function eventLoop() {
    console.log('event loop 1');

    setTimeout(()=>{
        console.log('inside timer')
    }, 0);

    console.log('event loop 2');

    const p = new Promise((resolve, reject) => {
        console.log('event loop 3');
        resolve(1000);
        console.log('event loop 4');
    });

    console.log('event loop 5');

    p.then(
        value => {
            console.log(value);
        }
    )

    console.log('event loop 6');

    evnetLoop1();

    console.log('event loop 9')

}