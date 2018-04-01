$(function(){
    var store = [];
    // contact instance
    function contact(first, last, email, phone) {
        this.fname = first;
        this.lname = last;
        this.email = email;
        this.phone = phone;
    }
    // validate individual inputs
    $('input').blur(function(){
        if($(this).val() == ""){
        $(this).next().html('Field cannot be empty');
        $(this).focus();
        }
    });
    $('input').keydown(function(){
        $(this).next().html('');
        $('#addcontact').next().html('');                    
    });

    // validate entire form 
    function validateForm() {
        if ($('#fname').val() == "" || $('#lname').val() == "" || $('#email').val() == "" ||$('#phone').val() == "") {
            $('#addcontact').next().html('No field can be empty');
        }else{
           submitInputs();
        }
    }

    // submit inputs
    function submitInputs(){
        saveInputs();
        $('#success').html('Successfully Added'); 
        setTimeout(function(){
            clearAll();
        }, 1000);
        
    }

    // reset all
    function clearAll(){
        $('#fname').val('');
        $('#lname').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#success').html('');

    }
    
    // on submit
    $('#addcontact').click(function(event){
        event.preventDefault();
        validateForm();
    });

    // insertion
    function saveInputs(){
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();

        var instance = new contact(fname, lname, email, phone);
        store.push(instance);
    }

});