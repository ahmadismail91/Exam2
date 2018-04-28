function ResetFields() {
   // document.getElementById("menu").empty();
    document.getElementById("CatName2").value = "";
    document.getElementById("CatDescribtion2").value = "";
    document.getElementById("result").value = " ";
    document.getElementById("CatID3").value = "";
    document.getElementById("CatDescribtion3").value = "";
    document.getElementById("result2").value = " ";
    document.getElementById("CatID4").value = "";
    document.getElementById("result3").value = " ";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";
    document.getElementById("section5").style.display = "none";
}
function MenuChoice()
 {
    ResetFields();
    
    //location.reload();
   
    if (document.getElementById("menu").value == "Display Category List")
    {
     DisplayCat();
     document.getElementById("section1").style.display = "block";
     document.getElementById("section1").style.visibility = "visible";
     document.getElementById("section2").style.visibility = "hidden";
     document.getElementById("section2").style.display = "none";  // i put display/none property so that when hiding the content of the area, the content of the other area is displayed on the same place (as i understood from the homework)
     document.getElementById("section3").style.visibility = "hidden";
     document.getElementById("section3").style.display = "none";
     document.getElementById("section4").style.visibility = "hidden";
     document.getElementById("section4").style.display = "none"; 
    }
    
    else if (document.getElementById("menu").value == "Create a Category")
    {ResetFields();
     document.getElementById("section1").style.display = "hidden";
     document.getElementById("section1").style.visibility = "none";
     document.getElementById("section2").style.visibility = "visible";
     document.getElementById("section2").style.display = "block";  // i put display/none property so that when hiding the content of the area, the content of the other area is displayed on the same place (as i understood from the homework)
     document.getElementById("section3").style.visibility = "hidden";
     document.getElementById("section3").style.display = "none";
     document.getElementById("section4").style.visibility = "hidden";
     document.getElementById("section4").style.display = "none"; 
     document.getElementById("section5").style.display = "none";
     document.getElementById("section5").style.visibility = "hidden";
    }
     else if (document.getElementById("menu").value == "Update Category Description ")
    {
     document.getElementById("section1").style.display = "none";
     document.getElementById("section1").style.visibility = "hidden";
     document.getElementById("section2").style.visibility = "hidden";
     document.getElementById("section2").style.display = "none";  // i put display/none property so that when hiding the content of the area, the content of the other area is displayed on the same place (as i understood from the homework)
     document.getElementById("section3").style.visibility = "visible";
     document.getElementById("section3").style.display = "block";
     document.getElementById("section4").style.visibility = "hidden";
     document.getElementById("section4").style.display = "none";
     document.getElementById("section5").style.display = "none";
     document.getElementById("section5").style.visibility = "hidden"; 
     }
     else if (document.getElementById("menu").value == "Delete a Category")
    {
     document.getElementById("section1").style.display = "none";
     document.getElementById("section1").style.visibility = "hidden";
     document.getElementById("section2").style.visibility = "hidden";
     document.getElementById("section2").style.display = "none";  // i put display/none property so that when hiding the content of the area, the content of the other area is displayed on the same place (as i understood from the homework)
     document.getElementById("section3").style.visibility = "hidden";
     document.getElementById("section3").style.display = "none";
     document.getElementById("section4").style.visibility = "visible";
     document.getElementById("section4").style.display = "block";
     document.getElementById("section5").style.display = "none";
     document.getElementById("section5").style.visibility = "hidden";
     }
    
     else if (document.getElementById("menu").value == "About The Developer")
    {
     document.getElementById("section1").style.display = "none";
     document.getElementById("section1").style.visibility = "hidden";
     document.getElementById("section2").style.visibility = "hidden";
     document.getElementById("section2").style.display = "none";  // i put display/none property so that when hiding the content of the area, the content of the other area is displayed on the same place (as i understood from the homework)
     document.getElementById("section3").style.visibility = "hidden";
     document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.visibility = "hidden";
     document.getElementById("section4").style.display = "none";
     document.getElementById("section5").style.visibility = "visible";
     document.getElementById("section5").style.display = "block";
     }
    else
    {
   
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";
    document.getElementById("section5").style.display = "none";
    }
     
 }
//-------------------------------------------------- list Category
 function DisplayCat()
{
    var objRequest = new XMLHttpRequest(); //Create AJAX request object
    
    //Create URL and Query string
    
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput1(output);
        }
    }
 
    //Initiate the server requestobjRequest
  objRequest.open("GET", url, true);
  objRequest.send();
}

function GenerateOutput1(result)
{
    
  var count = 0;
  var displaytext = "<table><tr><th>  ID </th><th>  Name  </th><th> Description </th><th></tr>"; //Create a table header;
 //Loop to extract data from the response object
  for(count = 0; count < result.GetAllCategoriesResult.length; count++)
        {
          displaytext += "<tr><td>  "+ result.GetAllCategoriesResult [count].CID + "</td><td>  "  +
         result.GetAllCategoriesResult [count].CName+ "</td><td>  " +
         result.GetAllCategoriesResult [count].CDescription + "</td><td>  " + "<br>";
        }
        
 displaytext += "</table>";
 document.getElementById("CatTable").innerHTML = displaytext;
 
}

//-------------------------------------------------- create category
function CreateCat()
{
    var objRequest = new XMLHttpRequest();
    var url = " https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCategory";
   
    var CatName = document.getElementById("CatName2").value;
    var CatDescription = document.getElementById("CatDescribtion2").value;
    
    //Create the parameterstring
    var newCategory = ' {"CName": "'+CatName+'", "CDescription": "'+CatDescription+'"}';
    //Checking for AJAx operationreturn
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }
    }
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newCategory);
}

function OperationResult(output)
    {
        if (output.WasSuccessful==1)
        {
           document.getElementById("result").innerHTML = "Operation completed successfully";   
           
        }
        else
        {
         document.getElementById("result").innerHTML = "Operation failed " + "<br>"+ output.Exception;
        }
    }

//--------------------------------------------------update
 
 function UpdateCategory()
{
   var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
    
    var CatID = document.getElementById("CatID3").value;
    var CatDes = document.getElementById("CatDescribtion3").value;
   
    //Create the parameterstring
    var newCat = '{"CID":"'+CatID+'", "CDescription":"'+CatDes+'"}';
    //Checking for AJAx operationreturn
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult2(result);
        }
    }
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newCat);
 
 }
function OperationResult2(output)
    {
        if(output.WasSuccessful ==1)
        {
         document.getElementById("result2").innerHTML =  "The operation was successful  " ;
        }
        else if(output.WasSuccessful ==0)
        {
         document.getElementById("result2").innerHTML =  "Operation failed with an unspecified error" + "<br>" + output.Exception;
        }
        else if(output.WasSuccessful ==-2)
        {
         document.getElementById("result2").innerHTML = "Operation failed because the data string supplied could not be deserialized into the service object" + "<br>" + output.Exception;
        }
         else if(output.WasSuccessful ==-3)
        {
         document.getElementById("result2").innerHTML = "Operation failed because a record with the supplied Order ID could not be found" + "<br>" + output.Exception;
        }
       
        else
        {
         document.getElementById("result2").innerHTML ="The operation fail: " + output.ecxeption ;
        }
        
    }
    
//--------------------------------------------------delete
function Confirm(){}
function DeleteCat()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCategory/";
    url += document.getElementById("CatID4").value;
    
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            OperationResult3(output);
        }
    }
 
    //Initiate the server requestobjRequest
  objRequest.open("GET", url, true);
  objRequest.send();
  
}

Confirm();


function OperationResult3(output)
    {
        if (output.DeleteCategoryResult.WasSuccessful==1)
        {
            document.getElementById("result3").innerHTML = "Operation completed successfully";              
        }
        else
        {
         document.getElementById("result3").innerHTML = "Operation failed" + "<br>" + output.Exception;
        }
    }