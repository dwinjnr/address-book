$(function(){
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
        alert('submitted');
        clearInputs();
    }

    // clear inputs
    function clearInputs(){
        $('#fname').val('');
        $('#lname').val('');
        $('#email').val('');
        $('#phone').val('');
    }
    
    // on submit
    $('#addcontact').click(function(event){
        event.preventDefault();
        validateForm();
    });

});