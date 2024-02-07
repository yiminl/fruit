async function f1() {
    console.log('test111');
    const r2 = await f2();
    console.log(r2);
    console.log('test222');
    return 1;

}

async function f2() {
    console.log('fn2');
    //return 2;
}

function getData() {
    const r1 = f1().then(
        value => console.log(value),
        error => console.log(error)
    );
    console.log(r1);
    console.log('test333');
}