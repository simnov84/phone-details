async function getdata(val) {
    try {
        const info = await fetch(
            `http://apilayer.net/api/validate?access_key=e6f6501f2f49721dd209614d430a842e&number=+91${val}`);
        const data = await info.json();

        // console.log(data);

        if(!data.valid){
            alert('Enter a valid phone number');
        }
        else {
            div1.innerHTML = 
            `
            <div class="div">
                <div>Phone Number</div>
                <div>${data.number}</div>
                <div>Country Name</div>
                <div>${data.country_name}</div>
                <div>Location</div>
                <div>${data.location}</div>
                <div>Carrier Name</div>
                <div>${data.carrier}</div>
                <div>Line Type</div>
                <div>${data.line_type}</div>
            </div>
            `;
        }
    } catch (err) {
        console.log(err);
    }
}

let div1 = document.getElementById('div1');

function search() {
    let number = document.getElementById('num').value;
    if(number) {
        getdata(number);
    }
    else {
        alert('Please Enter A Number');
    }
}