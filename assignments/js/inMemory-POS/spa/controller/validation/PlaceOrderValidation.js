const PLACEORDER_QTY_REGEX= /^[0-9]+$/;;
const PLACEORDER_DISCOUNT_REGEX = /^[0-9]+$/;
const PLACEORDER_CASH_REGEX = /^[0-9]+$/;

//add validations and text fields to the
let p_vArray = new Array();
p_vArray.push({field: $("#QtyP"), regEx:PLACEORDER_QTY_REGEX});
p_vArray.push({field: $("#inputDiscount"), regEx: PLACEORDER_DISCOUNT_REGEX});
p_vArray.push({field: $("#inputCash"), regEx: PLACEORDER_CASH_REGEX});

function clearPlaceOrderInputFields() {
    $("#QtyP,#inputDiscount,#inputCash").val("");
    $("#QtyP,#inputDiscount,#inputCash").css("border", "1px solid white");
    $("#selectCusId").focus();
}


//disable tab
$("#QtyP,#inputDiscount,#inputCash").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = p_vArray.indexOf(p_vArray.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkPlaceOrderValidations(p_vArray[indexNo]);


    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != p_vArray[p_vArray.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkPlaceOrderValidations(p_vArray[indexNo])) {
                p_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkPlaceOrderValidations(p_vArray[indexNo])) {
                purchaseOrder();
            }
        }
    }
});


function checkPlaceOrderValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setPlaceOrderBorder(true, object)
        return true;
    }
    setPlaceOrderBorder(false, object)
    return false;
}

function setPlaceOrderBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "1px solid white");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid white");
        }
    }

}

function checkAllPlaceOrder() {
    for (let i = 0; i < i_vArray.length; i++) {
        if (!checkItemValidations(i_vArray[i])) return false;
    }
    return true;
}
