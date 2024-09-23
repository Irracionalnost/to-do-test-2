const getResult = async () => {
    try {
        let response = await fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available');
        if (response.ok) { 
          let json = await response.json();
          console.log(json)
        }
    }
     catch (err) {
      alert(err);
    }
}

getResult();

