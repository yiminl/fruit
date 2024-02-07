function getData(url, data={}) {
    console.log('getData1111');

    const p = new Promise((resolve, reject) => {
      console.log('promise2222');

      $.ajax({
        type:'GET',
        url:  url,
        data: data,
        success: function (res) {
          resolve(res)
        },
        error: function (error) {
          resolve(error)
        },
      });

      console.log('promise3333');
    })

    console.log('getData4444');
    return p;
  }

  function onClick() {
    let email = '';

    console.log('before getData:', email);

    getData('http://10.157.14.51:8080/getID')
    .then(
      (value) => {
        const id = value;
        return getData('http://10.157.14.51:8080/getName',{id});
      },
      (error) => {console.log('get name fail')}
    ).then(
      (value) => {
        const name = value;
        return getData('http://10.157.14.51:8080/getEmail',{name});
      },
      (error) => {console.log('get email fail')}
    ).then(
      (value) => {
        email = value;
        console.log('after getEmail:', email);
        return email;
      }
    ).then(
      (value) => {console.log(value)}
    )

    console.log('after getData:', email);
  }