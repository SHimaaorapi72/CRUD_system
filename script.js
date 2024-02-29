var ProductName = document.getElementById('ProductName');
var Productprice = document.getElementById('Productprice');
var Productcategory = document.getElementById('Productcategory');
var Productdisc = document.getElementById('Productdisc');
var arrlist = [];
var Productsearch = document.getElementById('Productsearch')
var addProductbtn = document.getElementById('addProductbtn')
var updatebtn = document.getElementById('updateProduct')
var Productsearch = document.getElementById('Productsearch')
let currentIndex = -1





if(localStorage.getItem('products') != null){
    arrlist = JSON.parse(localStorage.getItem('products'))
    display(arrlist)
}

function addProduct(){
    var product ={
        name:ProductName.value,
        price:Productprice.value,
        categ:Productcategory.value,
        disc:Productdisc.value
    }

    arrlist.push(product);
    localStorage.setItem('products' , JSON.stringify(arrlist));
    display(arrlist)
    clearProduct()
}

function display(arr){
    var cartoona='';

    for(i=0; i<arrlist.length; i++ ){
        cartoona += `<tr>
        <td>${i+1}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].categ}</td>
        <td>${arr[i].disc}</td>
        <td><button onclick= "formForUpdate(${i})" class="btn btn-outline-warning"> Update</button></td>
        <td><button  onclick="deleteProduct(${i})" class=" btn btn-outline-danger"> delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML=cartoona;
}

function clearProduct(){

    ProductName.value ='';
    Productprice.value='';
    Productcategory.value='';
    Productdisc.value= '' ;
}

function deleteProduct(productIndex){
    arrlist.splice(productIndex, 1)
    localStorage.setItem('products' , JSON.stringify(arrlist));
    display(arrlist)

}

function searchProduct(){

    for(i=0; i<arrlist.length; i++){
       let  Productsearchvalue =Productsearch.value
       console.log(Productsearchvalue)
        var cartoona=''
        if(arrlist[i].name.toLowerCase().includes(Productsearchvalue.toLowerCase()) === true){
            cartoona+=   `<tr>
        <td>${i+1}</td>
        <td>${arrlist[i].name}</td>
        <td>${arrlist[i].price}</td>
        <td>${arrlist[i].categ}</td>
        <td>${arrlist[i].disc}</td>
        <td><button onclick= "formForUpdate(${i})" class="btn btn-outline-warning"> Update</button></td>
        <td><button  onclick="deleteProduct(${i})" class=" btn btn-outline-danger"> delete</button></td>
    </tr>`
    document.getElementById('tableBody').innerHTML=cartoona;
        }else{
            display(arrlist)
          }
    }
    // console.log(matchedProducts)
    

}


function formForUpdate(i){
    currentIndex =i
    addProductbtn.classList.replace('d-block','d-none')
    updatebtn.classList.replace('d-none','d-block')
    ProductName.value = arrlist[i].name;
    Productprice.value=arrlist[i].price;
    Productcategory.value= arrlist[i].categ;
    Productdisc.value= arrlist[i].disc;



}

function addEdit(){
    console.log(currentIndex)
    arrlist[currentIndex].name = ProductName.value
    arrlist[currentIndex].price = Productprice.value
    arrlist[currentIndex].categ = Productcategory.value
    arrlist[currentIndex].disc = Productdisc.value
    console.log(arrlist)
    display(arrlist)
    localStorage.setItem('products' , JSON.stringify(arrlist));
    addProductbtn.classList.replace('d-none','d-block')
    updatebtn.classList.replace('d-block','d-none')
}

