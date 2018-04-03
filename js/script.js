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

    // view contacts
    function viewContacts(){
        $('#view').html('');
        for(i=0; i<store.length; i++){
            var name = store[i].fname +' '+store[i].lname;
            var email = store[i].email;
            var phone = store[i].phone;
            $('#view').html($('#view').html() + '<div class="col-m-8 col-4 contact"><p class="name" onclick="toggleMore($(this))">'+ name +'</p><div class="more hidemore"><p>'+ email +'</p><p>'+ phone +'</p></div></div>');
        }
    }
    function editContacts(){
        $('#edit').html('');
        for(i=0; i<store.length; i++){
            var fname = store[i].fname;
            var lname = store[i].lname;
            var email = store[i].email;
            var phone = store[i].phone;
            var name = fname + ' ' + lname;
            $('#edit').html($('#edit').html() + '\
            <div class="col-m-8 col-4 contact">\
                <p class="name">'+ name +'</p>\
                <span onClick="toggleMore($(this))">Edit</span>\
                <div class="more hidemore">\
                    <input type="text" value="'+ fname +'">\
                    <input type="text" value="'+ lname +'">\
                    <input type="text" value="'+ email +'">\
                    <input type="text" value="'+ phone +'">\
                    <input onClick="editContact()" type="submit" value="Edit Contact">\
                </div>\
            </div>');
        }
    }
    // by default only add div should display
    $('#add').siblings().hide();

    // navigating functions
    $('#addBtn').click(function(){
        $('#add').show();
        $('#add').siblings().hide();
    });
    $('#viewBtn').click(function(){
        $('#view').show();
        $('#view').siblings().hide();
        viewContacts();
    });
    $('#editBtn').click(function(){
        $('#edit').show();
        $('#edit').siblings().hide();
        editContacts();
    });
});