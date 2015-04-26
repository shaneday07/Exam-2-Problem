function Hide()
{
    document.getElementById("all").style.visibility = "hidden";
    document.getElementById("create").style.visibility = "hidden";
    document.getElementById("update").style.visibility = "hidden";
    document.getElementById("delete").style.visibility = "hidden";
    document.getElementById("about").style.visibility = "hidden";
}
function GetAll(str)
{
    var getRequest;
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    
    if (str == "")
    {
        document.getElementById("info").innerHTML = "";
        return;
    }
    
    if (window.XMLHttpRequest)
    {
        getRequest = new XMLHttpRequest;
    }
    
    getRequest.onreadystatechange = function()
    
    {
        if (getRequest.readyState == 4 && getRequest.status == 200)
        {
            var output = JSON.parse(getRequest.responseText);
            ShowAll(output);
        }
    }
    getRequest.open("GET", url, true);
    getRequest.send();
}
function ShowAll(result)
{
    var count = 0;
    var display = "";
    
        display += ("<center>" + "<table border = '2' style = 'color: white;'>");
        
        display += ('<th>' + 'CID' + '<th>' + 'CName' + '<th>' + 'CDescription' + '<th>');
        
          for (count = 0; count < result.GetAllCategoriesResult.length; count++)
            {
                   display += "<tr>";
                        display += "<td>" + result.GetAllCategoriesResult[count].CID + "</td>";
                        display += "<td>" + result.GetAllCategoriesResult[count].CName + "</td>";
                        display += "<td>" + result.GetAllCategoriesResult[count].CDescription + "</td>";
                        
                   display += "</tr>";
                   
                   
                   
            }
            
             
              document.getElementById("alldisplay").innerHTML = display;
}
        
        
        
function CreateCat()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCategory";
    
    var categoryname = document.getElementById("catname").value;
    var categoryription = document.getElementById("catdescrip").value;
    var newcustomer = '{"CName":"' + categoryname + '","CDescription":"' + categoryription +'"}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
            
        }
    }
    
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("createdisplay").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("createdisplay").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}

function  UpdateCat()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
    
    var categoryid = document.getElementById("newcatid").value;
    var categorydesc = document.getElementById("newcatdescrip").value;
    var updateshipping = '{"CID":' + categoryid + ',"CDescription":"' + categorydesc + '"}';
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var res = JSON.parse(objRequest.responseText);
            OperationResult_2(result);
            
        }
    }
    
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(updateshipping);
}

function OperationResult_2(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("updateresult").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("updateresult").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}

function deleteCustomer()
{
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCategory";
    url += document.getElementById("deleteid").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            OperationResult_3(output);
            
        }
    }
    
    objRequest.open("GET",url,true);
    getRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send();
}

function OperationResult_3(output)
{
    if (result.DeleteCategoryResult.WasSuccessful == 1)
    {
        document.getElementById("deleteresult").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("deleteresult").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}

function MenuChange()
{
    if (document.getElementById("menu").value == "Show All Categories")
    {   
        document.getElementById("all").style.display = "inline";
        document.getElementById("all").style.visibility = "visible";
        document.getElementById("create").style.display = "none";
        document.getElementById("create").style.visibility = "hidden";
        document.getElementById("update").style.display = "none";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("delete").style.display = "none";
        document.getElementById("delete").style.visibility = "hidden";
        document.getElementById("about").style.display = "none";
        document.getElementById("about").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Create a Category")
    {
        document.getElementById("all").style.display = "none";
        document.getElementById("all").style.visibility = "hidden";
        document.getElementById("create").style.display = "inline";
        document.getElementById("create").style.visibility = "visible";
        document.getElementById("update").style.display = "none";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("delete").style.display = "none";
        document.getElementById("delete").style.visibility = "hidden";
        document.getElementById("about").style.display = "none";
        document.getElementById("about").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Update a Category Description")
    {
        document.getElementById("all").style.display = "none";
        document.getElementById("all").style.visibility = "hidden";
        document.getElementById("create").style.display = "none";
        document.getElementById("create").style.visibility = "hidden";
        document.getElementById("update").style.display = "inline";
        document.getElementById("update").style.visibility = "visible";
        document.getElementById("delete").style.display = "none";
        document.getElementById("delete").style.visibility = "hidden";
        document.getElementById("about").style.display = "none";
        document.getElementById("about").style.visibility = "hidden";
        
    }
    else if (document.getElementById("menu").value == "Delete a Category")
    {
        document.getElementById("all").style.display = "none";
        document.getElementById("all").style.visibility = "hidden";
        document.getElementById("create").style.display = "none";
        document.getElementById("create").style.visibility = "hidden";
        document.getElementById("update").style.display = "none";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("delete").style.display = "inline";
        document.getElementById("delete").style.visibility = "visible";
        document.getElementById("about").style.display = "none";
        document.getElementById("about").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "About")
    {
        document.getElementById("all").style.display = "none";
        document.getElementById("all").style.visibility = "hidden";
        document.getElementById("create").style.display = "none";
        document.getElementById("create").style.visibility = "hidden";
        document.getElementById("update").style.display = "none";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("delete").style.display = "none";
        document.getElementById("delete").style.visibility = "hidden";
        document.getElementById("about").style.display = "inline";
        document.getElementById("about").style.visibility = "visible";
    }
    else
    {
        document.getElementById("all").style.visibility = "hidden";
        document.getElementById("create").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("delete").style.visibility = "hidden";
        document.getElementById("about").style.visibility = "hidden";
    }
}

